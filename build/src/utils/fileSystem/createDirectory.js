"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const createDirectory = async (path) => {
    if (!fs_1.default.existsSync(path))
        fs_1.default.mkdirSync(path, { recursive: true });
};
exports.default = createDirectory;

//# sourceMappingURL=createDirectory.js.map
