const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const location = await tables.locations.readAll();
    res.json(location);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const location = await tables.locations.read(req.params.id);
    if (location == null) {
      res.sendStatus(404);
    } else {
      res.json(location);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const location = req.body;
  try {
    const insertId = await tables.locations.update(req.params.id, location);
    if (insertId == null) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const location = req.body;

  try {
    const insertId = await tables.locations.create(location);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const location = await tables.locations.delete(req.params.id);

    if (location == null) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
