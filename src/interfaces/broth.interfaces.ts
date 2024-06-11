import {z} from "zod"
import { brothRequestSchema, brothSchema  } from "../schemas/broth.schemas"

type TBroth = z.infer<typeof brothSchema>
type TBrothRequest = z.infer<typeof brothRequestSchema>



export { TBroth, TBrothRequest }