import { z } from "zod"

const brothSchema = z.object({
    id:z.string(),
    imageInactive:z.string(),
    imageActive:z.string(),
    name: z.string(),
    description:z.string(),
    price:z.number()

})

const brothRequestSchema = brothSchema.omit({
    id:true
})


export { brothSchema, brothRequestSchema  }