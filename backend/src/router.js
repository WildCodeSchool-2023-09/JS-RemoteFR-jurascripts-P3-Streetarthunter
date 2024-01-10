const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");

const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./services/validateUser");
const { hashPassword } = require("./services/auth");

const artworksControllers = require("./controllers/artworkControllers");
const { validateArtwork } = require("./services/validateArtwork");

const artistControllers = require("./controllers/artistControllers");
const { validateArtist } = require("./services/validateArtist");

const locationControllers = require("./controllers/locationControllers");
const { validateLocation } = require("./services/validateLocation");

const captureControllers = require("./controllers/captureControllers");
const { validateCapture } = require("./services/validateCapture");

// Authentification routes

router.post("/register", authControllers.add);
router.post("/login", authControllers.login);

// Routes of users
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", validateUser, hashPassword, userControllers.add);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

// Routes of artworks
router.get("/artworks", artworksControllers.browse);
router.get("/artworks/:id", artworksControllers.read);
router.post("/artworks", validateArtwork, artworksControllers.add);
router.put("/artworks/:id", validateArtwork, artworksControllers.edit);
router.delete("/artworks/:id", artworksControllers.destroy);

// Routes of artists
router.get("/artists", artistControllers.browse);
router.get("/artists/:id", artistControllers.read);
router.post("/artists", validateArtist, artistControllers.add);
router.put("/artists/:id", validateArtist, artistControllers.edit);
router.delete("/artists/:id", artistControllers.destroy);

// Routes of locations
router.get("/locations", locationControllers.browse);
router.get("/locations/:id", locationControllers.read);
router.post("/locations", validateLocation, locationControllers.add);
router.put("/locations/:id", validateLocation, locationControllers.edit);
router.delete("/locations/:id", locationControllers.destroy);

// Routes of captures
router.get("/captures", captureControllers.browse);
router.get("/captures/:id", captureControllers.read);
router.post("/captures", validateCapture, captureControllers.add);
router.put("/captures/:id", validateCapture, captureControllers.edit);
router.delete("/captures/:id", captureControllers.destroy);

module.exports = router;
