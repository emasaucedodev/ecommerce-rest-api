import { createProductService, deleteProductService, getAllProductsService, getProductService, updateProductService } from "../services/products.services.js"

export const createProduct = async (req, res) => {
    try {
        const {name, price, description, image, stock, categoryId} = req.body
        const isCreated = await createProductService(name, price, description, image, stock, categoryId)
        if(!isCreated.dataValues) return res.status(400).json({message: isCreated})
        res.status(201).json(isCreated)   
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductsService()
        if(!products) return res.status(404).json({message: "Products not found"})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const user = await getProductService(id)
        if(!user) return res.status(404).json({message: "Product not found"})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, description, image, stock, categoryId } = req.body
        const obj = {
            name,
            price,
            description,
            image, 
            stock, 
            categoryId
        }
        const updatedProduct = await updateProductService(id, obj)
        if(!updatedProduct) return res.status(404).json({message: "Product not found"})
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await deleteProductService(id)
        if(deletedProduct) return res.status(200).json({message: "Product deleted"})
        res.status(404).json({message: "Product not found"})
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}
