import { Router } from "express"
import { createOrderController } from "../controllers/order.controller"
import { verifyApiKeyMW } from "../middlewares/verifyApiKey.middleware"

const orderRoutes:Router = Router()

orderRoutes.post('',verifyApiKeyMW, createOrderController)

export default orderRoutes