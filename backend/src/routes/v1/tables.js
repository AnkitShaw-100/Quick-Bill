import { Router } from "express";
import { z } from "zod";
import { requireAuthApi } from "../../middlewares/requireAuthApi.js";
import { ensureDbUser } from "../../middlewares/ensureDbUser.js";
import { Table } from "../../models/Table.js";

export const tablesRouter = Router();

function getClerkUserId(req) {
  const userId =
    req?.auth && typeof req.auth.userId === "string" ? req.auth.userId : null;
  if (!userId) throw new Error("Missing auth userId");
  return userId;
}

tablesRouter.get(
  "/tables",
  requireAuthApi(),
  ensureDbUser(),
  async (req, res, next) => {
    try {
      const clerkUserId = getClerkUserId(req);
      const status = z
        .enum(["available", "seated", "billed", "cleaning"])
        .optional()
        .safeParse(req.query.status);

      const filter = { createdByClerkUserId: clerkUserId };
      if (status.success && status.data) filter.status = status.data;

      const tables = await Table.find(filter)
        .sort({ code: 1 })
        .limit(200)
        .lean();

      res.json({
        tables: tables.map((t) => ({
          id: t.code,
          seats: t.seats,
          status: t.status,
          guests: t.guests,
          seatedAt: t.seatedAt,
        })),
      });
    } catch (err) {
      next(err);
    }
  },
);

const UpsertTableSchema = z.object({
  code: z.string().min(1),
  seats: z.number().int().positive(),
  status: z.enum(["available", "seated", "billed", "cleaning"]).optional(),
  guests: z.number().int().positive().optional(),
});

tablesRouter.post(
  "/tables",
  requireAuthApi(),
  ensureDbUser(),
  async (req, res, next) => {
    try {
      const clerkUserId = getClerkUserId(req);
      const parsed = UpsertTableSchema.parse(req.body);
      const update = { seats: parsed.seats };

      if (parsed.status) update.status = parsed.status;
      if (parsed.guests !== undefined) update.guests = parsed.guests;
      if (parsed.status === "seated") update.seatedAt = new Date();
      if (parsed.status === "available") {
        update.guests = undefined;
        update.seatedAt = undefined;
      }

      const doc = await Table.findOneAndUpdate(
        { code: parsed.code, createdByClerkUserId: clerkUserId },
        {
          $set: update,
          $setOnInsert: {
            code: parsed.code,
            createdByClerkUserId: clerkUserId,
          },
        },
        { upsert: true, new: true },
      ).lean();

      res.status(201).json({ table: doc });
    } catch (err) {
      next(err);
    }
  },
);
