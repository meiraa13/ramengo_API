import { Router } from "express"
import { schemaParsedMW } from "../middlewares/schemaParse.middleware"
import { createOrderController } from "../controllers/order.controller"
import { orderRequestSchema } from "../schemas/order.schemas"

const orderRoutes:Router = Router()

orderRoutes.post('', schemaParsedMW(orderRequestSchema), createOrderController)
orderRoutes.get('', )

export default orderRoutes