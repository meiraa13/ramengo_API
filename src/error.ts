import { NextFunction, Request, Response } from "express"


class AppError extends Error {
    statusCode: number

    constructor(message:string, statusCode:number = 400){
        super(message)
        this.statusCode = statusCode
    }
}

const handleErrors = (err:Error, req:Request, res:Response, next:NextFunction) =>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            error: err.message
        })
    }

    console.log(err)

    return res.status(500).json({
        error: 'could not place order'
    })
}

export { AppError, handleErrors }