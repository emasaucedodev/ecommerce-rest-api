import app from "./app.js"
import { sequelize } from "./database/database.js"

import "./models/User.js"
import "./models/Category.js"
import "./models/Order.js"
import "./models/Product.js"
import "./models/Cart.js"
import "./models/Associations.js"

async function main() {
    await sequelize.sync({force: false})
    app.listen(3000)
    console.log("Server listening on port 3000")
}

main()