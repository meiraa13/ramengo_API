import { NextFunction, Request, Response } from "express"
import { AppError } from "../error"
import "dotenv/config"



async function verifyApiKeyMW (req:Request, res:Response, next:NextFunction):Promise<Response | void>{
    const authorization = req.header("x-api-key")

    if(!authorization){
        throw new AppError('x-api-key header is missing', 403)
    }

    if(authorization !== process.env.API_KEY){
        throw new AppError('x-api-key header is missing', 403)
    }

   

    return next()
}

export { verifyApiKeyMW}