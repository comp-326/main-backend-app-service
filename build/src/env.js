"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fileSystem_1 = require("./utils/fileSystem");
const env_path = path_1.default.join(path_1.default.join(__dirname), '..', '.env.example');
const buildVariables = () => {
    (0, fileSystem_1.setEnvironmentVariables)(env_path);
};
buildVariables();

//# sourceMappingURL=env.js.map
