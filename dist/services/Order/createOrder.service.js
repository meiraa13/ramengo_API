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
exports.createOrderService = void 0;
const data_source_1 = require("../../data-source");
const order_schemas_1 = require("../../schemas/order.schemas");
function createOrderService(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const broth = yield data_source_1.brothRepository.findOne({
            where: {
                id: body.brothId
            }
        });
        const protein = yield data_source_1.proteinRepository.findOne({
            where: {
                id: body.proteinId
            }
        });
        const order = data_source_1.orderRepository.create({
            description: `${broth === null || broth === void 0 ? void 0 : broth.name} and ${protein === null || protein === void 0 ? void 0 : protein.name} Ramen`,
            image: "https://tech.redventures.com.br/icons/ramen/ramenChasu.png"
        });
        yield data_source_1.orderRepository.save(order);
        const response = order_schemas_1.orderSchema.parse(order);
        return response;
    });
}
exports.createOrderService = createOrderService;
