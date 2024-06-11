import "reflect-metadata"
import "express-async-errors"
import cors from "cors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import brothRoutes from "./routes/broth.routes"
import proteinRoutes from "./routes/protein.routes"
import orderRoutes from "./routes/oder.routes"


const app:Application = express()
app.use(express.json())

app.use(cors())

app.use('/broths', brothRoutes)
app.use('/proteins', proteinRoutes)
app.use('/order', orderRoutes)


app.use(handleErrors)



export default app