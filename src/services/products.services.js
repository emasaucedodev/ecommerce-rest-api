import { Product } from "../models/Product.js";

export const createProductService = async (name, price, description, image, stock, categoryId) => {
    try {
        const newProduct = await Product.create({
            name,
            price,
            description,
            image,
            stock,
            categoryId
        })
        return newProduct
    } catch (error) {
        return error.message
    }
}

export const getAllProductsService = async () => {
    try {
        const products = await Product.findAll()
        return products        
    } catch (error) {
        return error.message
    }
}

export const getProductService = async (id) => {
    try {
        const product = Product.findOne({
            where:{
                id: id
            }
        })
        return product
    } catch (error) {
        return error.message
    }
}

export const updateProductService = async (id, obj) => {
    try {
        const {name, price, description, image, stock, categoryId} = obj
        const product = await getProductService(id)
        if(!product) throw new Error("Product not found")
        const updated = await product.update({
            name, 
            price, 
            description, 
            image, 
            stock, 
            categoryId
        })
        return updated

    } catch (error) {
        return error.message
    }
}

export const deleteProductService = async (id) => {
    try {
        const deletedProduct = await Product.destroy({
            where: {
                id: id
            }
        })
        return deletedProduct
    } catch (error) {
        return error.message
    }
}