"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateUserTokenDecode = void 0;
const config_1 = require("../../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function activateUserTokenDecode(token) {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.environmentConfig.SECRET_KEY);
    return decoded;
}
exports.activateUserTokenDecode = activateUserTokenDecode;

//# sourceMappingURL=activateUserToken.js.map
