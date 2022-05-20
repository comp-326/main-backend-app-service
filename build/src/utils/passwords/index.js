"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Password {
    constructor() {
        this.hashPassword = async (password) => {
            const salt = await bcryptjs_1.default.genSalt(12);
            const hashedPassword = await bcryptjs_1.default.hash(password, salt);
            return hashedPassword;
        };
        this.comparePassword = async (password, passwordHash) => {
            const match = await bcryptjs_1.default.compare(password, passwordHash);
            return match;
        };
    }
}
exports.default = new Password();

//# sourceMappingURL=index.js.map
