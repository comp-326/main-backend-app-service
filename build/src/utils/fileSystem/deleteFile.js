"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const deleteFile = async (path) => {
    if (!fs_1.default.existsSync(path)) {
        try {
            fs_1.default.unlinkSync(path);
        }
        catch (error) {
            console.log(error.message);
        }
    }
};
exports.default = deleteFile;

//# sourceMappingURL=deleteFile.js.map
