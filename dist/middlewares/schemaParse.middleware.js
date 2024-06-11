"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaParsedMW = void 0;
const schemaParsedMW = (schema) => (req, res, next) => {
    const validateData = schema.parse(req.body);
    req.body = validateData;
    return next();
};
exports.schemaParsedMW = schemaParsedMW;
