import { createCategoryService, getAllCategoriesService, getCategoryService, updateCategoryService, deleteCategoryService } from "../services/categories.services.js"

export const createCategory = async (req, res) => {
    try {
        const {name} = req.body
        const isCreated = await createCategoryService(name)
        if(!isCreated.dataValues) return res.status(400).json({message: isCreated})
        res.status(201).json(isCreated)   
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

export const getAllCategories = async (req, res) => {
    try {
        const categories = await getAllCategoriesService()
        if(!categories) return res.status(404).json({message: "Categories not found"})
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await getCategoryService(id)
        if(!category) return res.status(404).json({message: "Category not found"})
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const obj = {
            name
        }
        const updatedCategory = await updateCategoryService(id, obj)
        if(!updatedCategory) return res.status(404).json({message: "Category not found"})
        res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const deletedCategory = await deleteCategoryService(id)
        if(deletedCategory) return res.status(200).json({message: "Category deleted"})
        res.status(404).json({message: "Category not found"})
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}
