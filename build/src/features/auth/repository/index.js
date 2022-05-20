"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../../users/models"));
class AuthRepository {
    constructor() {
        this.getUserByEmail = async (email) => {
            const user = await models_1.default.findOne({ email }).select('+password');
            return user;
        };
    }
}
exports.default = new AuthRepository();

//# sourceMappingURL=index.js.map
