import {z} from "zod"
import { proteinRequestSchema, proteinSchema } from "../schemas/protein.schemas"

type TProtein = z.infer<typeof proteinSchema>
type TProteinRequest = z.infer<typeof proteinRequestSchema>



export { TProtein, TProteinRequest }