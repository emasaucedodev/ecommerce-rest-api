import { Router } from "express"
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/users.controllers.js"

const router = Router()

//Routes
router.post("/create", createUser)
router.get("/getAll", getAllUsers)
router.get("/get/:id", getUser)
router.put("/update/:id", updateUser)
router.delete("/delete/:id", deleteUser)

export default router