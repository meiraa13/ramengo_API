import { requestDTO } from "../../dtos/requestDTO"
import { AppError } from "../../error"


export async function createOrderService(body: requestDTO){

    if(!body.brothId || !body.proteinId){
        throw new AppError("both brothId and proteinId are required", 400)
    }

    try {
        const requestId = await fetch('https://api.tech.redventures.com.br/orders/generate-id',{
            method:'POST',
            headers:{
                "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"

            }
        })
        const responseId = await requestId.json()

        const request = await fetch('https://api.tech.redventures.com.br/orders',{
            method:'POST',
            headers:{
                "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"
            },
            body:JSON.stringify(body)

        })
        const response = await request.json()

        const responseObj = {
            id: responseId.orderId,
            description: response.description,
            image: response.image
        }

        return responseObj
        
        
    } catch (error) {
        console.log(error)
    }
    

}

