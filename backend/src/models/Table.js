import mongoose, { Schema } from "mongoose";

const TableSchema = new Schema(
  {
    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    createdByClerkUserId: { type: String, required: true, index: true },
    code: { type: String, required: true, index: true },
    seats: { type: Number, required: true },
    status: {
      type: String,
      enum: ["available", "seated", "billed", "cleaning"],
      default: "available",
      index: true,
    },
    guests: { type: Number },
    seatedAt: { type: Date },
  },
  { timestamps: true },
);

export const Table =
  mongoose.models.Table ?? mongoose.model("Table", TableSchema);
