"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proteinRequestSchema = exports.proteinSchema = void 0;
const zod_1 = require("zod");
const proteinSchema = zod_1.z.object({
    id: zod_1.z.string(),
    imageInactive: zod_1.z.string(),
    imageActive: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number()
});
exports.proteinSchema = proteinSchema;
const proteinRequestSchema = proteinSchema.omit({
    id: true
});
exports.proteinRequestSchema = proteinRequestSchema;
