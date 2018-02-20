const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"

router.route("/near")
  .post(usersController.findNear);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route("/search/:username")
  .get(usersController.searchUsername);

router.route("/update")
  .post(usersController.addFile);

module.exports = router;
