"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setup_1 = __importDefault(require("../setup"));
const app = (0, express_1.default)();
(0, setup_1.default)({ app });
exports.default = app;

//# sourceMappingURL=index.js.map
