const express = require("express");
const { getUserAll,
  createUSer,
  updateUser,
  deleteUser} = require("../controllers/user.controller")
const router = express();

router.get("/users", getUserAll );
router.post("/users", createUSer );
router.put("/users/:id", updateUser );
router.delete("/users/:id", deleteUser );

module.exports = router;