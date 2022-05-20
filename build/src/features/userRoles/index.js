"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRolesRoute_1 = __importDefault(require("./routes/getRolesRoute"));
const postNewRolesRoute_1 = __importDefault(require("./routes/postNewRolesRoute"));
exports.default = ({ app, pathName }) => {
    (0, getRolesRoute_1.default)(app)(pathName);
    (0, postNewRolesRoute_1.default)(app)(pathName);
};

//# sourceMappingURL=index.js.map
