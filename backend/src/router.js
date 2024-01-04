const express = require("express");

const router = express.Router();

const artworksControllers = require("./controllers/artworkControllers");
const { validateArtwork } = require("./services/validateArtwork");

const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./services/validateUser");

const artistControllers = require("./controllers/artistControllers");
const { validateArtist } = require("./services/validateArtist");

const locationControllers = require("./controllers/locationControllers");
const { validateLocation } = require("./services/validateLocation");

// Route to get a list of users
router.get("/users", userControllers.browse);

// Route to get a specific user by ID
router.get("/users/:id", userControllers.read);

// Route to add a new user
router.post("/users", validateUser, userControllers.add);

// Route to update an existing user by ID
router.put("/users/:id", userControllers.edit);

// Route to delete an user by ID
router.delete("/users/:id", userControllers.destroy);

// Route to get a list of artworks
router.get("/artworks", artworksControllers.browse);

// Route to get a specific artwork by ID
router.get("/artworks/:id", artworksControllers.read);

// Route to add a new artwork
router.post("/artworks", validateArtwork, artworksControllers.add);

// Route to update an existing artwork by ID
router.put("/artworks/:id", validateArtwork, artworksControllers.edit);

// Route to delete an artwork by ID
router.delete("/artworks/:id", artworksControllers.destroy);

// Route to get a list of artists
router.get("/artists", artistControllers.browse);

// Route to get a specific artist by ID
router.get("/artists/:id", artistControllers.read);

// Route to add a new artist
router.post("/artists", validateArtist, artistControllers.add);

// Route to update an existing artist by ID
router.put("/artists/:id", validateArtist, artistControllers.edit);

// Route to delete an artist by ID
router.delete("/artists/:id", artistControllers.destroy);

// Route to get a list of locations
router.get("/locations", locationControllers.browse);

// Route to get a specific location by ID
router.get("/locations/:id", locationControllers.read);

// Route to add a new location
router.post("/locations", validateLocation, locationControllers.add);

// Route to update an existing location by ID
router.put("/locations/:id", validateLocation, locationControllers.edit);

// Route to delete a location by ID
router.delete("/locations/:id", locationControllers.destroy);

module.exports = router;
