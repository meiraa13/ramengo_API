import { brothRepository, orderRepository, proteinRepository } from "../../data-source";
import Broth from "../../entities/broth.entity";
import Order from "../../entities/order.entity";
import Protein from "../../entities/protein.entity";
import { TOrderRequest } from "../../interfaces/order.interfaces";
import { orderSchema } from "../../schemas/order.schemas";




export async function createOrderService(body: TOrderRequest){
    const broth:Broth | null = await brothRepository.findOne({
        where:{
            id:body.brothId
        }
    })

    const protein:Protein | null = await proteinRepository.findOne({
        where:{
            id:body.proteinId
        }
    })
    
    const order:Order = orderRepository.create({
        description:`${broth?.name} and ${protein?.name} Ramen`,
        image:"https://tech.redventures.com.br/icons/ramen/ramenChasu.png"
    })
    await orderRepository.save(order)

    const response = orderSchema.parse(order)

    return response

}

