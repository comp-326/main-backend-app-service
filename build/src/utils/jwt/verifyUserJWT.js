"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressError_1 = require("../../common/errors/ExpressError");
const config_1 = require("../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class VerifyUserJWT {
    constructor() {
        this.verifyPasswordToken = async (token) => {
            try {
                const decoded = jsonwebtoken_1.default.verify(token, config_1.environmentConfig.SECRET_KEY);
                return decoded.userId;
            }
            catch (error) {
                throw new ExpressError_1.ExpressError({
                    data: {},
                    message: error.message ? error.message : 'Unknown error occured',
                    status: 'error',
                    statusCode: 500
                });
            }
        };
    }
    activateUserTokenDecode(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, config_1.environmentConfig.SECRET_KEY);
            return decoded.userId;
        }
        catch (error) {
            throw new ExpressError_1.ExpressError({
                data: {},
                message: error.message ? error.message : 'Unknown error occured',
                status: 'error',
                statusCode: 500
            });
        }
    }
}
exports.default = new VerifyUserJWT();

//# sourceMappingURL=verifyUserJWT.js.map
