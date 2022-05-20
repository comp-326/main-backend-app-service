"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginUserRoute_1 = __importDefault(require("./routes/loginUserRoute"));
const logoutUserRoute_1 = __importDefault(require("./routes/logoutUserRoute"));
exports.default = ({ app, pathName }) => {
    (0, loginUserRoute_1.default)(app)(pathName);
    (0, logoutUserRoute_1.default)(app)(pathName);
};

//# sourceMappingURL=index.js.map
