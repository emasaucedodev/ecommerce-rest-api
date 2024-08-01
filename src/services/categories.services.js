import { Category } from "../models/Category.js";

export const createCategoryService = async (name) => {
    try {
        const newCategory = await Category.create({
            name
        })
        return newCategory
    } catch (error) {
        return error.message
    }
}

export const getAllCategoriesService = async () => {
    try {
        const categories = await Category.findAll()
        return categories        
    } catch (error) {
        return error.message
    }
}

export const getCategoryService = async (id) => {
    try {
        const category = Category.findOne({
            where:{
                id: id
            }
        })
        return category
    } catch (error) {
        return error.message
    }
}

export const updateCategoryService = async (id, obj) => {
    try {
        const {name} = obj
        const category = await getCategoryService(id)
        if(!category) throw new Error("Category not found")
        const updated = await category.update({
            name
        })
        return updated

    } catch (error) {
        return error.message
    }
}

export const deleteCategoryService = async (id) => {
    try {
        const deletedCategory = await Category.destroy({
            where: {
                id: id
            }
        })
        return deletedCategory
    } catch (error) {
        return error.message
    }
}