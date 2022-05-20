"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const passwords_1 = __importDefault(require("../../../utils/passwords"));
const userInfoValidator_1 = __importDefault(require("../utils/userInfoValidator"));
const user_1 = __importDefault(require("./user"));
const createUser = (0, user_1.default)({
    validator: userInfoValidator_1.default,
    passwordUtil: passwords_1.default,
});
exports.createUser = createUser;
exports.default = createUser;

//# sourceMappingURL=index.js.map
