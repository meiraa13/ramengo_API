import { brothRepository } from "../../data-source";
import Broth from "../../entities/broth.entity";
import { TBrothRequest } from "../../interfaces/broth.interfaces";


export async function createBrothService(body: TBrothRequest){
    const broth:Broth = brothRepository.create(body)
    await brothRepository.save(broth)

    return broth


}

