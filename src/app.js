import express from "express"
import morgan from "morgan"

const app = express()

//Import routes
import userRoutes from "./routes/users.routes.js"
import productRoutes from "./routes/products.routes.js"
import categoryRoutes from "./routes/categories.routes.js"

//Middlewares
app.use(express.json())
app.use(morgan("dev"))

//Routes
app.use("/user", userRoutes)
app.use("/product", productRoutes)
app.use("/category", categoryRoutes)

export default app

