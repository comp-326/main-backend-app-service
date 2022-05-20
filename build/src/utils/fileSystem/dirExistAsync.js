"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dirExistAsync = async (path) => {
    let exist = false;
    fs_1.default.access(path, async (err) => {
        if (err)
            exist = false;
        else
            exist = true;
    });
    return exist;
};
exports.default = dirExistAsync;

//# sourceMappingURL=dirExistAsync.js.map
