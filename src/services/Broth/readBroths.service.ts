import { brothRepository } from "../../data-source";


export async function readBrothsService(){

    const broths = await brothRepository.find()

    return broths

}