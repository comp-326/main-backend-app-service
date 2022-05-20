"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGravatarUrl = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
function generateGravatarUrl(email, size = 200) {
    const hash = crypto_js_1.default.MD5(email).toString();
    return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
}
exports.generateGravatarUrl = generateGravatarUrl;

//# sourceMappingURL=index.js.map
