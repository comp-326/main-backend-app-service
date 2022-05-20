"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dirExistSync = (path) => {
    return fs_1.default.existsSync(path);
};
exports.default = dirExistSync;

//# sourceMappingURL=dirExist.js.map
