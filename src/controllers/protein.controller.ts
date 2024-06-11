import { Request, Response } from "express";
import { TBrothRequest } from "../interfaces/broth.interfaces";
import { createProteinService } from "../services/Protein/createProtein.service";
import { readProteinsService } from "../services/Protein/readProteins.service";


async function createProteinController (req:Request, res:Response):Promise<Response>{
    const body: TBrothRequest = req.body
    const newBroth = await createProteinService(body)

    return res.status(201).json(newBroth)

}

async function readProteinsController(req:Request, res:Response):Promise<Response>{

    const broths = await readProteinsService()

    return res.status(200).json(broths)


}


export { createProteinController, readProteinsController }