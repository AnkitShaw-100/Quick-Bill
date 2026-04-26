import { Router } from "express";
import { z } from "zod";
import { requireAuthApi } from "../../middlewares/requireAuthApi.js";
import { ensureDbUser } from "../../middlewares/ensureDbUser.js";
import { Category } from "../../models/Category.js";

export const categoriesRouter = Router();

function getClerkUserId(req) {
  const userId =
    req?.auth && typeof req.auth.userId === "string" ? req.auth.userId : null;
  if (!userId) throw new Error("Missing auth userId");
  return userId;
}

categoriesRouter.get(
  "/categories",
  requireAuthApi(),
  ensureDbUser(),
  async (req, res, next) => {
    try {
      const clerkUserId = getClerkUserId(req);
      const active = z
        .enum(["true", "false"])
        .optional()
        .safeParse(req.query.active);

      const filter = { createdByClerkUserId: clerkUserId };
      if (active.success && active.data)
        filter.isActive = active.data === "true";

      const categories = await Category.find(filter)
        .sort({ name: 1 })
        .limit(200)
        .lean();

      res.json({ categories });
    } catch (err) {
      next(err);
    }
  },
);

const CreateCategorySchema = z.object({
  name: z.string().min(1),
});

categoriesRouter.post(
  "/categories",
  requireAuthApi(),
  ensureDbUser(),
  async (req, res, next) => {
    try {
      const clerkUserId = getClerkUserId(req);
      const parsed = CreateCategorySchema.parse(req.body);
      const created = await Category.create({
        createdByClerkUserId: clerkUserId,
        name: parsed.name.trim(),
        isActive: true,
      });
      res.status(201).json({ category: created });
    } catch (err) {
      next(err);
    }
  },
);
