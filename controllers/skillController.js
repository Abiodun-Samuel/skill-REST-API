import Skill from "../models/skillModel.js";

//@desc get all skils
//@route GET /api/skills
//@access Private
export const getSkills = async (req, res) => {
  const skills = await Skill.find();
  res.status(200).json(skills);
};

//@desc post skill
//@route POST /api/skills
//@access Private
export const setSkill = async (req, res) => {
  const data = req.body.skill;
  const skill = await Skill.create({ skill: data.toUpperCase() });
  res.status(201).json({ message: "Skill has been added successfully" });
};

//@desc edit skill
//@route PuT /api/skills/:id
//@access Private
export const updateSkill = async (req, res) => {
  const skill_id = req.params.id;
  const skillExist = await Skill.findById(skill_id);
  if (!skillExist) res.status(400).json({ message: "Skill doesn't exist" });
  const updatedSkill = await Skill.findByIdAndUpdate(
    req.params.id,
    {
      skill: req.body.skill.toUpperCase(),
    },
    { new: true }
  );
  if (updatedSkill)
    res.status(200).json({ message: "Skill has been updated successfully" });
};

//@desc delete skill
//@route DELETE /api/skills/:id
//@access Private
export const deleteSkill = async (req, res) => {
  const skill_id = req.params.id;
  const skillExist = await Skill.findById(skill_id);
  if (!skillExist) res.status(400).json({ message: "Skill doesn't exist" });
  const deletedSkill = await Skill.findByIdAndRemove(req.params.id);
  if (deletedSkill)
    res.status(200).json({ message: "Skill has been deleted successfully" });
};
