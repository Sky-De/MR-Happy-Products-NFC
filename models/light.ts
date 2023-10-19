import { Schema, model, models } from "mongoose";

const LightSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "Light image URL is required."],
    },
  },
  { timestamps: true }
);

const LightModel = models.LightModel || model("LightModel", LightSchema);

export default LightModel;
