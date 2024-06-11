import { Router } from "express"
import { schemaParsedMW } from "../middlewares/schemaParse.middleware"
import { proteinRequestSchema } from "../schemas/protein.schemas"
import { createProteinController, readProteinsController } from "../controllers/protein.controller"

const proteinRoutes:Router = Router()

proteinRoutes.post('', schemaParsedMW(proteinRequestSchema), createProteinController)
proteinRoutes.get('', readProteinsController )

export default proteinRoutes