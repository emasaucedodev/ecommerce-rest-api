import { User } from "../models/User.js"

export const createUserService = async (name, email, password, isAdmin, isActive) => {
    try {
        const isNameAllow = /^[A-Za-z0-9]{4,}$/.test(name) //name accepts lowercase letters, uppercase letters, numbers and must have a minimum of 4 characters
        const isEmailAllow = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) //email must be in the format of an email
        const isPasswordAllow = /^[A-Za-z0-9]{4,}$/.test(password) //password accepts lowercase letters, uppercase letters, numbers and must have a minimum of 4 characters
        const isAdminAllow = typeof isAdmin === "boolean" //isAdmin has to be a boolean
        const isActiveAllow = typeof isActive === "boolean" //isActive has to be a boolean
    
        if(isNameAllow === false) throw new Error("Name accepts lowercase letters, uppercase letters, numbers and must have a minimum of 4 characters")
        if(isEmailAllow === false) throw new Error("Email must be in the format of an email")
        if(isPasswordAllow === false) throw new Error("Password accepts lowercase letters, uppercase letters, numbers and must have a minimum of 4 characters")
        if(!isAdminAllow) throw new Error("isAdmin has to be a boolean")
        if(!isActiveAllow) throw new Error("isActive has to be a boolean")
    
        const newUser = await User.create({
            name,
            email,
            password,
            isAdmin,
            isActive
        })
        return newUser     
    } catch (error) {
        return error.message
    }
}

export const getAllUsersService = async () => {
    try {
        const users = await User.findAll()
        return users        
    } catch (error) {
        return error.message
    }
}

export const getUserService = async (id) => {
    try {
        const user = await User.findOne({
            where: {
                id: id,
                isActive: true
            }
        })
        return user
    } catch (error) {
        return error.message
    }
}

export const updateUserService = async (id, obj) => {
    try {
        const {name, email, password, isActive, isAdmin} = obj
        const user = await getUserService(id)
        if(!user) throw new Error("User not found")
        const updated = await user.update({
            name,
            email,
            password,
            isActive,
            isAdmin
        })
        return updated

    } catch (error) {
        return error.message
    }
}

export const deleteUserService = async (id) => {
    try {
        const user = await getUserService(id)
        if(!user) throw new Error("User not found")
        const deleted = await user.update({
            isActive: false
        })
        return deleted

    } catch (error) {
        return error.message
    }
}