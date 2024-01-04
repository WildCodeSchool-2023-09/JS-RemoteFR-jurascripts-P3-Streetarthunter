const express = require("express");

const router = express.Router();
const artworksControllers = require("./controllers/artworksControllers");
const { validateArtwork } = require("./services/validateArtwork");

// Route to get a list of artworks
router.get("/artworks", artworksControllers.browse);

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./services/validateUser");

// Route to get a list of items
router.get("/users", userControllers.browse);

// Route to get a specific item by ID
router.get("/users/:id", userControllers.read);

// Route to edit a specific item by ID
router.put("/users/:id", userControllers.edit);

// Route to add a new item
router.post("/users", validateUser, userControllers.add);

// Route to destroy a specific item, user, etc.
router.delete("/users/:id", userControllers.destroy);
/* ************************************************************************* */
// Route to get a specific artwork by ID
router.get("/artworks/:id", artworksControllers.read);

// Route to add a new artwork
router.post("/artworks", validateArtwork, artworksControllers.add);

// Route to update an existing artwork by ID
router.put("/artworks/:id", validateArtwork, artworksControllers.edit);

// Route to delete an artwork by ID
router.delete("/artworks/:id", artworksControllers.destroy);

module.exports = router;
