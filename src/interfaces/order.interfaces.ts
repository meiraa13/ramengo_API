import {z} from "zod"
import { orderRequestSchema, orderSchema } from "../schemas/order.schemas"

type TOrder = z.infer<typeof orderSchema>
type TOrderRequest = z.infer<typeof orderRequestSchema>



export { TOrder, TOrderRequest }