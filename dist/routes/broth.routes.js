"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const broth_controller_1 = require("../controllers/broth.controller");
const verifyApiKey_middleware_1 = require("../middlewares/verifyApiKey.middleware");
const brothRoutes = (0, express_1.Router)();
brothRoutes.get('', verifyApiKey_middleware_1.verifyApiKeyMW, broth_controller_1.readBrothsController);
exports.default = brothRoutes;
