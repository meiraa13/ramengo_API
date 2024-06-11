"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const protein_controller_1 = require("../controllers/protein.controller");
const verifyApiKey_middleware_1 = require("../middlewares/verifyApiKey.middleware");
const proteinRoutes = (0, express_1.Router)();
proteinRoutes.get('', verifyApiKey_middleware_1.verifyApiKeyMW, protein_controller_1.readProteinsController);
exports.default = proteinRoutes;
