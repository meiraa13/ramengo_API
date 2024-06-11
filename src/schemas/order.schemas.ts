import { z } from "zod"

const orderSchema = z.object({
    id:z.string(),
    description:z.string(),
    image:z.string()

})

const orderRequestSchema = z.object({
    brothId:z.string(),
    proteinId:z.string()
})


export {orderRequestSchema, orderSchema }