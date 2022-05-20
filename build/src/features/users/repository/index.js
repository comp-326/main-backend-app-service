"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const models_2 = __importDefault(require("../../userRoles/models"));
class UserRepository {
    constructor() {
        this.softDeleteUser = async (id) => {
            const user = await models_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
            return user;
        };
        this.createUser = async (userData) => {
            const role = await models_2.default.getDefaultRole();
            const newUser = await models_1.default.create(Object.assign(Object.assign({}, userData), { role }));
            return newUser;
        };
        this.findByEmail = async (email) => {
            const user = await models_1.default.findByEmail(email);
            return user;
        };
        this.findById = async (id) => {
            const user = await models_1.default.findById(id).select('+password');
            return user;
        };
        this.find = async (limit, page) => {
            const users = await models_1.default.find({})
                .populate('role', 'name -_id ')
                .limit(limit)
                .skip(limit * (page - 1));
            return users;
        };
        this.updateById = async (id, data) => {
            const updated = await models_1.default.findByIdAndUpdate(id, Object.assign({}, data), { new: true }).select('+password');
            return updated;
        };
        this.deleteById = async (id) => {
            const deleted = await models_1.default.findByIdAndDelete(id);
            return deleted;
        };
    }
}
exports.default = new UserRepository();

//# sourceMappingURL=index.js.map
