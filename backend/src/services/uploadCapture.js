const multer = require("multer");
const path = require("path");

// Configuration de Multer pour l'upload de captures
const captureStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/captures");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `capture-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const uploadCapture = multer({ storage: captureStorage });

module.exports = uploadCapture;
