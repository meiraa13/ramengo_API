import { Request, Response } from "express";
import { readBrothsService } from "../services/Broth/readBroths.service";



async function readBrothsController(req:Request, res:Response):Promise<Response>{

    const broths = await readBrothsService()

    return res.status(200).json(broths)


}


export { readBrothsController }