"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("crypto-js"));
const config_1 = require("../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenGEN {
    constructor() {
        this.generateSimpleToken = async (payload) => {
            return jsonwebtoken_1.default.sign(payload, config_1.environmentConfig.SECRET_KEY, { expiresIn: '24hr' });
        };
        this.decodeSimpleToken = async (token) => {
            console.log('\n Decoding \n', token);
            return jsonwebtoken_1.default.verify(token, config_1.environmentConfig.SECRET_KEY);
        };
    }
    generateEncodedToken(payload) {
        const token = jsonwebtoken_1.default.sign(payload, config_1.environmentConfig.SECRET_KEY, { expiresIn: '270h' });
        const encryptedToken = crypto_js_1.default.AES.encrypt(token, config_1.environmentConfig.ENC_KEY).toString();
        return encryptedToken;
    }
    decodeEncodedToken(token) {
        const decryptedToken = crypto_js_1.default.AES.decrypt(token, config_1.environmentConfig.ENC_KEY).toString(crypto_js_1.default.enc.Utf8);
        return decryptedToken;
    }
}
exports.default = new TokenGEN();

//# sourceMappingURL=tokenGEN.js.map
