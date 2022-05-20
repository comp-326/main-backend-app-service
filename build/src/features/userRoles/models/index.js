"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userPermissions_1 = __importDefault(require("../../../constants/userPermissions"));
const mongodb_1 = __importDefault(require("../../../databases/mongodb"));
const userRoleSchema = new mongodb_1.default.Schema({
    default: {
        type: Boolean,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    permissions: {
        type: Number,
        required: true,
        min: 0
    },
}, {
    timestamps: true
});
userRoleSchema.methods.hasPermission = function (permission) {
    const permitted = (this.permissions & permission) === permission;
    return permitted;
};
userRoleSchema.methods.addPermission = function (permission) {
    if (!this.hasPermission(permission))
        this.permissions += permission;
};
userRoleSchema.methods.removePermission = function (permission) {
    if (this.hasPermission(permission))
        this.permissions -= permission;
};
userRoleSchema.methods.resetPermission = function () {
    this.permissions = 0;
};
userRoleSchema.statics.getDefaultRole = async function () {
    const defaultRole = await userRoleModel.findOne({ default: true });
    return defaultRole;
};
userRoleSchema.statics.InsertRoles = async function () {
    const roles = {
        ['User']: [
            userPermissions_1.default.VIEW,
            userPermissions_1.default.LIKE,
            userPermissions_1.default.SHARE,
            userPermissions_1.default.COMMENT,
            userPermissions_1.default.USER
        ],
        ['Admin']: [
            userPermissions_1.default.VIEW,
            userPermissions_1.default.LIKE,
            userPermissions_1.default.SHARE,
            userPermissions_1.default.COMMENT,
            userPermissions_1.default.USER,
            userPermissions_1.default.ADMIN
        ]
    };
    const defaultRole = 'User';
    Object.keys(roles).forEach(async (r) => {
        let role = await userRoleModel.findOne({ name: r });
        if (!role)
            role = new userRoleModel({ name: r });
        role.resetPermission();
        for (const perm of roles[r])
            role.addPermission(perm);
        role.default = role.name === defaultRole;
        await role.save();
    });
};
const userRoleModel = mongodb_1.default.model('UserRoles', userRoleSchema);
exports.default = userRoleModel;

//# sourceMappingURL=index.js.map
