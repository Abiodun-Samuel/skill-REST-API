import mongoose from "mongoose";

const skillSchema = mongoose.Schema(
  {
    skill: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
