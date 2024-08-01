import { Router } from "express"
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/products.controllers.js"

const router = Router()

//Routes
router.post("/create", createProduct)
router.get("/getAll", getAllProducts)
router.get("/get/:id", getProduct)
router.put("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

export default router
