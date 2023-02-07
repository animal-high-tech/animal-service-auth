"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const apiSecret = 'animal-arclight-2023';
const authServices = ['animal-front'];
const AuthCheckerMiddleware = new index_1.AuthChecker(apiSecret, authServices).build();
exports.default = AuthCheckerMiddleware;
