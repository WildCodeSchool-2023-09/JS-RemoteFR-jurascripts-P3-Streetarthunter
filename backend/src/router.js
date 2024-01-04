const express = require("express");

const router = express.Router();

const artworksControllers = require("./controllers/artworksControllers");
const { validateArtwork } = require("./services/validateArtwork");

const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./services/validateUser");


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

module.exports = router;
