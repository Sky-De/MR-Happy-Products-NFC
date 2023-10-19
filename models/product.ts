import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "Product image URL is required."],
    },
    type: {
      type: String,
      required: [true, "Product type is required."],
    },
  },
  { timestamps: true }
);

const ProductModel =
  models.ProductModel || model("ProductModel", ProductSchema);

export default ProductModel;
