const express = require("express");

const router = express.Router();

const artworksControllers = require("./controllers/artworksControllers");
const { validateArtwork } = require("./services/validateArtwork");

const locationControllers = require("./controllers/locationControllers");
const { validateLocation } = require("./services/validateLocation");

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
