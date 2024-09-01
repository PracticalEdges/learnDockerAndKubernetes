const { Router } = require("express");
const { createUser, deleteUser, updateUser, getUser, getUsers } = require("../controllers/crud");

const router = Router();

router.post("/create", createUser);

router.delete("/delete/:id", deleteUser);

router.put("/update/:id", updateUser);

router.get("/get/:id", getUser);

router.get("/getAll", getUsers);

module.exports = router;