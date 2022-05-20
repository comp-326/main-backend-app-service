"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
function default_1(req, res) {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return compression_1.default.filter(req, res);
}
exports.default = default_1;

//# sourceMappingURL=index.js.map
