const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const locationControllers = require("./controllers/locationControllers");
const { validateLocation } = require("./services/validateLocation");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/locations", locationControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/locations/:id", locationControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/locations", validateLocation, locationControllers.add);

router.put("/locations/:id", validateLocation, locationControllers.edit);

router.delete("/locations/:id", locationControllers.destroy);

/* ************************************************************************* */

module.exports = router;
