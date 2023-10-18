import { Schema, model, models } from "mongoose";

const BoxSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "Product image URL is required."],
    },
  },
  { timestamps: true }
);

const BoxModel = models.BoxModel || model("BoxModel", BoxSchema);

export default BoxModel;
