const fs = require("fs").promises;
const CaptureManager = require("../models/CaptureManager");

const captureManager = new CaptureManager();

const browse = async (req, res, next) => {
  try {
    const captures = await captureManager.readAll();
    res.json(captures);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const capture = await captureManager.read(req.params.id);
    if (capture == null) {
      res.sendStatus(404);
    } else {
      res.send(capture.capture);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const updatedCapture = req.body;

  try {
    const success = await captureManager.update(req.params.id, updatedCapture);
    if (!success) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const capture = req.body;

  // Récupérer le chemin du fichier uploadé par Multer
  const capturePath = req.file.path;

  try {
    // Ajouter la capture à la base de données
    capture.capture = capturePath;
    const insertId = await captureManager.create(capture);

    res.status(201).json({ insertId });
  } catch (err) {
    // En cas d'erreur, supprimer le fichier uploadé
    await fs.unlink(capturePath);

    console.error("Erreur lors de l'ajout de la capture :", err);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const success = await captureManager.delete(req.params.id);
    if (!success) {
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
