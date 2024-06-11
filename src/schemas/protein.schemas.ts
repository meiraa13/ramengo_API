import { z } from "zod"

const proteinSchema = z.object({
    id:z.string(),
    imageInactive:z.string(),
    imageActive:z.string(),
    name: z.string(),
    description:z.string(),
    price:z.number()

})

const proteinRequestSchema = proteinSchema.omit({
    id:true
})


export { proteinSchema, proteinRequestSchema  }