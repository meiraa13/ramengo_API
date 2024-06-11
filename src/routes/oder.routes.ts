import { Router } from "express"
import { schemaParsedMW } from "../middlewares/schemaParse.middleware"
import { createOrderController } from "../controllers/order.controller"
import { orderRequestSchema } from "../schemas/order.schemas"
import { verifyApiKeyMW } from "../middlewares/verifyApiKey.middleware"

const orderRoutes:Router = Router()

orderRoutes.post('',verifyApiKeyMW, schemaParsedMW(orderRequestSchema), createOrderController)

export default orderRoutes