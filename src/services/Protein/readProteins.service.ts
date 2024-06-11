import { proteinRepository } from "../../data-source";


export async function readProteinsService(){

    const proteins = await proteinRepository.find()

    return proteins

}