const router = require("express").Router();
const allRoutes = require("./all");

// User routes
router.use("/", allRoutes);

module.exports = router;
