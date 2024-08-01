import { Router } from "express"
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/categories.controllers.js"

const router = Router()

//Routes
router.post("/create", createCategory)
router.get("/getAll", getAllCategories)
router.get("/get/:id", getCategory)
router.put("/update/:id", updateCategory)
router.delete("/delete/:id", deleteCategory)

export default router