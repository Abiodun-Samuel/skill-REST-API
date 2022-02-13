import express from "express";
import {
  deleteSkill,
  getSkills,
  setSkill,
  updateSkill,
} from "../controllers/skillController.js";
const router = express.Router();

router.get("/", getSkills);
router.post("/", setSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;
