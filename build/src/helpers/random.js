"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alphabet_1 = __importDefault(require("./alphabet"));
function default_1(length) {
    try {
        if (!(length >= 8) || length > 12)
            throw new Error('Length must be >= 8 and <=12');
        let password = '';
        const alpha = alphabet_1.default.ALPHABETS;
        for (let i = 0; i < length; i++) {
            const position = Math.random() * (alpha.length - 1);
            password += alpha[Math.round(position)];
        }
        return password;
    }
    catch (error) {
        return error.message;
    }
}
exports.default = default_1;

//# sourceMappingURL=random.js.map
