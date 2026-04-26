import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    createdByClerkUserId: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export const Category =
  mongoose.models.Category ?? mongoose.model("Category", CategorySchema);
