const router = require("express").Router();
const userController = require("../../controllers/userController");
const midiController = require("../../controllers/midiController");


// Matches with "/api/user"
router.route("/user/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/login/")
  .post(userController.login)

router
  .route("/midi/")
  .post(midiController.midi)
  .put(midiController.saveMidi)

module.exports = router;
