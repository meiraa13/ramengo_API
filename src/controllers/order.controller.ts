import { Request, Response } from "express";
import { TOrderRequest } from "../interfaces/order.interfaces";
import { createOrderService } from "../services/Order/createOrder.service";


async function createOrderController (req:Request, res:Response):Promise<Response>{
    const body: TOrderRequest = req.body
    const newOrder = await createOrderService(body)

    return res.status(201).json(newOrder)

}


export { createOrderController }