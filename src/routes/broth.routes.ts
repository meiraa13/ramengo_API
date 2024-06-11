import { Router } from "express"
import { createBrothController, readBrothsController } from "../controllers/broth.controller"
import { schemaParsedMW } from "../middlewares/schemaParse.middleware"
import { brothRequestSchema } from "../schemas/broth.schemas"

const brothRoutes:Router = Router()

brothRoutes.post('', schemaParsedMW(brothRequestSchema), createBrothController)
brothRoutes.get('', readBrothsController )

export default brothRoutes