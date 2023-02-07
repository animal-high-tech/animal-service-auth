"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
class AuthKeyGen {
    constructor(apiSecret, authServices) {
        this.apiSecret = '';
        this.authServices = [];
        this.apiSecret = apiSecret;
        this.authServices = authServices;
    }
    generateKeys() {
        const map = new Map();
        for (const serviceName of this.authServices) {
            const token = jwt.sign({ serviceName }, this.apiSecret, {
                expiresIn: '90d'
            });
            const key = `${`${serviceName}`}`;
            map.set(key, token);
            return map;
        }
        return map;
    }
}
exports.default = AuthKeyGen;
