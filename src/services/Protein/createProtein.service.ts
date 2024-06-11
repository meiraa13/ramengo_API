import {  proteinRepository } from "../../data-source";
import Protein from "../../entities/protein.entity";
import { TProteinRequest } from "../../interfaces/protein.interfaces";



export async function createProteinService(body: TProteinRequest){
    const protein:Protein = proteinRepository.create(body)
    await proteinRepository.save(protein)

    return protein


}

