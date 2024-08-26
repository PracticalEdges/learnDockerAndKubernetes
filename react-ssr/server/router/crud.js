import { Router } from "express";
const router = Router();
import { createUser, deleteUser, updateUser, getUser, getUsers } from "../controllers/crud";

router.post("/create", createUser);

router.delete("/delete/:id", deleteUser);

router.put("/update/:id", updateUser);

router.get("/get/:id", getUser);

router.get("/getAll", getUsers);

export default router;