const getAllTasks = (req, res) => {
  res.send("getting the items  ");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json(req.params.id);
};

const updateTask = (req, res) => {
  res.send("Updating tasks   ");
};

const deleteTask = (req, res) => {
  res.send("Deleting tasks   ");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
