import { Request, Response } from "express";
import { TBrothRequest } from "../interfaces/broth.interfaces";
import { createBrothService } from "../services/Broth/createBroth.service";
import { readBrothsService } from "../services/Broth/readBroths.service";


async function createBrothController (req:Request, res:Response):Promise<Response>{
    const body: TBrothRequest = req.body
    const newBroth = await createBrothService(body)

    return res.status(201).json(newBroth)

}

async function readBrothsController(req:Request, res:Response):Promise<Response>{

    const broths = await readBrothsService()

    return res.status(200).json(broths)


}


export { createBrothController, readBrothsController }