"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GenerateJWTTokens {
    constructor() {
        this.generatePasswordResetToken = function ({ userId }) {
            return function generate(duration = '') {
                const token = jsonwebtoken_1.default.sign({ userId }, config_1.environmentConfig.SECRET_KEY, {
                    expiresIn: duration ? duration : '24h'
                });
                return token;
            };
        };
        this.generateEmailActivationToken = function ({ userId }) {
            return function generate(duration = '') {
                const token = jsonwebtoken_1.default.sign({ userId }, config_1.environmentConfig.SECRET_KEY, {
                    expiresIn: duration ? duration : '24h'
                });
                return token;
            };
        };
        this.generateAuthToken = function ({ email, userId }) {
            return function generate(duration = '') {
                const token = jsonwebtoken_1.default.sign({ email, userId }, config_1.environmentConfig.SECRET_KEY, {
                    expiresIn: duration ? duration : '24h'
                });
                return token;
            };
        };
    }
}
exports.default = new GenerateJWTTokens();

//# sourceMappingURL=tokenGenerator.js.map
