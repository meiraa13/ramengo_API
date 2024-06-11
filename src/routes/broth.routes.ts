import { Router } from "express"
import { readBrothsController } from "../controllers/broth.controller"
import { schemaParsedMW } from "../middlewares/schemaParse.middleware"
import { brothRequestSchema } from "../schemas/broth.schemas"
import { verifyApiKeyMW } from "../middlewares/verifyApiKey.middleware"

const brothRoutes:Router = Router()

brothRoutes.get('', verifyApiKeyMW ,readBrothsController )

export default brothRoutes