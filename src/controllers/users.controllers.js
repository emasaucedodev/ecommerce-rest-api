import { createUserService, deleteUserService, getAllUsersService, getUserService, updateUserService } from "../services/users.services.js"

export const createUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin, isActive } = req.body
        const isCreated = await createUserService(name, email, password, isAdmin, isActive)
        if(!isCreated.dataValues) return res.status(400).json({message: isCreated})
        res.status(201).json(isCreated)    
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService({
            where: {
                isActive: true
            }
        })
        if(!users) return res.status(404).json({message: "Users not found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUserService(id)
        if(!user) return res.status(404).json({message: "User not found"})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password, isActive, isAdmin } = req.body
        const obj = {
            name,
            email,
            password,
            isActive,
            isAdmin
        }
        const updatedUser = await updateUserService(id, obj)
        if(!updatedUser) return res.status(404).json({message: "User not found"})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await deleteUserService(id)
        if(!deletedUser) return res.status(404).json({message: "User not found"})
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}