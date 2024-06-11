"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readProteinsController = void 0;
const readProteins_service_1 = require("../services/Protein/readProteins.service");
// async function createProteinController (req:Request, res:Response):Promise<Response>{
//     const body: TBrothRequest = req.body
//     const newBroth = await createProteinService(body)
//     return res.status(201).json(newBroth)
// }
function readProteinsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const broths = yield (0, readProteins_service_1.readProteinsService)();
        return res.status(200).json(broths);
    });
}
exports.readProteinsController = readProteinsController;
