const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
  
// Matches with "/api/users/:id"
router.route("/location")
  .put(usersController.updateLocation);  
  
router.route("/near")
  .post(usersController.findNear);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route("/search/:username")
  .get(usersController.searchUsername);

//route to get username based on auth0id
router.route("/username/:auth0id")
  .get(usersController.searchAuth);

router.route("/upload")
  .post(usersController.addFile);

router.route("/update/:username")
  .put(usersController.updateUser);

router.route("/new")
  .post(usersController.create);

module.exports = router;
