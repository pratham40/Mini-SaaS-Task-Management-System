import Task from "../models/task.model.js";
const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user.id,
  });

  res.json(task);
};

const getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { userId: req.user.id },
  });

  res.json(tasks);
};

const updateTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.id },
  });

  if (!task) return res.status(404).json({ msg: "Not found" });

  task.status = "COMPLETED";
  await task.save();

  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id, userId: req.user.id },
  });

  res.json({ msg: "Deleted" });
};

export { createTask, getTasks, updateTask, deleteTask };