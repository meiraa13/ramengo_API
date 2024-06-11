import { NextFunction, Request, Response } from 'express'
import { ZodTypeAny } from 'zod'

const schemaParsedMW = (schema:ZodTypeAny) => 
(req:Request, res: Response, next:NextFunction) =>{
    const validateData = schema.parse(req.body)

    req.body = validateData

    return next()
}

export { schemaParsedMW }