import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Order = sequelize.define(
    "Order",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.FLOAT
        }
    }
)