"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthKeyGen = exports.AuthChecker = void 0;
const auth_1 = __importDefault(require("./lib/models/auth"));
exports.AuthChecker = auth_1.default;
const gen_1 = __importDefault(require("./lib/models/gen"));
exports.AuthKeyGen = gen_1.default;
