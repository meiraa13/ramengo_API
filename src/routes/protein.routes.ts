import { Router } from "express"
import { schemaParsedMW } from "../middlewares/schemaParse.middleware"
import { proteinRequestSchema } from "../schemas/protein.schemas"
import { readProteinsController } from "../controllers/protein.controller"
import { verifyApiKeyMW } from "../middlewares/verifyApiKey.middleware"

const proteinRoutes:Router = Router()

proteinRoutes.get('', verifyApiKeyMW ,readProteinsController )

export default proteinRoutes