"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = exports.orderRequestSchema = void 0;
const zod_1 = require("zod");
const orderSchema = zod_1.z.object({
    id: zod_1.z.string(),
    description: zod_1.z.string(),
    image: zod_1.z.string()
});
exports.orderSchema = orderSchema;
const orderRequestSchema = zod_1.z.object({
    brothId: zod_1.z.string(),
    proteinId: zod_1.z.string()
});
exports.orderRequestSchema = orderRequestSchema;
