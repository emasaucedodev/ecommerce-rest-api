import { User } from "./User.js"
import { Product } from "./Product.js"
import { Category } from "./Category.js"
import { Cart } from "./Cart.js"
import { Order } from "./Order.js"

//Relations

User.hasOne(Cart, { foreignKey: 'userId' })
User.hasMany(Order, { foreignKey: 'userId' })

Product.belongsTo(Category, { foreignKey: 'categoryId' })
Product.belongsToMany(Cart, { through: 'CartProduct', foreignKey: 'productId' })
Product.belongsToMany(Order, { through: 'OrderProduct', foreignKey: 'productId' })

Cart.belongsTo(User, { foreignKey: 'userId' })
Cart.belongsToMany(Product, { through: 'CartProduct', foreignKey: 'cartId' })

Order.belongsTo(User, { foreignKey: 'userId' })
Order.belongsToMany(Product, { through: 'OrderProduct', foreignKey: 'orderId' })
