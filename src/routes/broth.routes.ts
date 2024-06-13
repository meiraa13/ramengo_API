import { Router } from "express"
import { readBrothsController } from "../controllers/broth.controller"
import { verifyApiKeyMW } from "../middlewares/verifyApiKey.middleware"

const brothRoutes:Router = Router()

brothRoutes.get('', verifyApiKeyMW ,readBrothsController )

export default brothRoutes