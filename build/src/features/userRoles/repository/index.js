"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("./../models"));
class UserRoleRepository {
    constructor() {
        this.findByName = async (name) => {
            const role = await models_1.default.findOne({ name });
            if (role)
                return role;
            return null;
        };
        this.createRoles = async () => {
            const roles = await models_1.default.InsertRoles();
            return roles;
        };
        this.findRoles = async () => {
            const roles = await models_1.default.find({});
            return roles;
        };
    }
}
exports.default = new UserRoleRepository();

//# sourceMappingURL=index.js.map
