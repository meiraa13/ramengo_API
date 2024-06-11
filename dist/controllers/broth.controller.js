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
exports.readBrothsController = void 0;
const readBroths_service_1 = require("../services/Broth/readBroths.service");
// async function createBrothController (req:Request, res:Response):Promise<Response>{
//     const body: TBrothRequest = req.body
//     const newBroth = await createBrothService(body)
//     return res.status(201).json(newBroth)
// }
function readBrothsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const broths = yield (0, readBroths_service_1.readBrothsService)();
        return res.status(200).json(broths);
    });
}
exports.readBrothsController = readBrothsController;
