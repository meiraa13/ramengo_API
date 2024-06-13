import { Request, Response } from "express";
import { createOrderService } from "../services/Order/createOrder.service";


async function createOrderController (req:Request, res:Response){

    const newOrder = await createOrderService(req.body)

    return res.status(201).json(newOrder)

}


export { createOrderController }