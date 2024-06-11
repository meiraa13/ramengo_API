import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import brothRoutes from "./routes/broth.routes"
import proteinRoutes from "./routes/protein.routes"
import orderRoutes from "./routes/oder.routes"
import { apiKeyAuth } from '@vpriem/express-api-key-auth';


const app:Application = express()
app.use(express.json())

app.use('/broths', brothRoutes)
app.use('/proteins', proteinRoutes)
app.use('/orders', orderRoutes)

app.use(apiKeyAuth(['my-apy-key1']))
app.use(handleErrors)



export default app