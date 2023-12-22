const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./services/validateUser");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/users", userControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/users/:id", userControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/users", validateUser, userControllers.add);

// Route to destroy a specific item, ueser, etc.

/* ************************************************************************* */

module.exports = router;
