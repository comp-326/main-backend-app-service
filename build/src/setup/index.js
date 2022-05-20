"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
function default_1({ app }) {
    process.on('unhandledRejection', (reason, p) => {
        console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    });
    process.on('uncaughtException', err => {
        console.log('Uncaught Exception thrown', err.message);
    });
    return (0, express_1.default)({ app });
}
exports.default = default_1;

//# sourceMappingURL=index.js.map
