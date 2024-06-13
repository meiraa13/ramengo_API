import { Request, Response } from "express";
import { readProteinsService } from "../services/Protein/readProteins.service";


async function readProteinsController(req:Request, res:Response):Promise<Response>{

    const broths = await readProteinsService()

    return res.status(200).json(broths)


}


export { readProteinsController }