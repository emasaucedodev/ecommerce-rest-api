import Sequelize from "sequelize"

export const sequelize = new Sequelize(
    "ecommercedb", //db name
    "postgres", //username
    "persona5112", //password
    {
        host: "localhost",
        dialect: "postgres",
    }
)