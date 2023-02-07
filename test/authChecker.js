"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const apiSecret = 'movn';
const authServices = ['movn-apollo'];
const AuthCheckerMiddleware = new index_1.AuthChecker(apiSecret, authServices).build();
exports.default = AuthCheckerMiddleware;
