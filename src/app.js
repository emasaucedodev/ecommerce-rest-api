import express from "express"
import morgan from "morgan"

const app = express()

//Import routes
import userRoutes from "./routes/users.routes.js"

//Middlewares
app.use(express.json())
app.use(morgan("dev"))

//Routes
app.use("/user", userRoutes)

export default app

