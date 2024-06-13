import { Router } from "express"
import { readProteinsController } from "../controllers/protein.controller"
import { verifyApiKeyMW } from "../middlewares/verifyApiKey.middleware"

const proteinRoutes:Router = Router()

proteinRoutes.get('', verifyApiKeyMW ,readProteinsController )

export default proteinRoutes