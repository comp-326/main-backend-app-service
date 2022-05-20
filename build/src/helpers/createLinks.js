"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createForgotPasswordLink = exports.createAccountActivationLink = exports.createWorkspaceInviteLink = void 0;
const config_1 = require("../config");
function createWorkspaceInviteLink({ role, workspaceId }) {
    return `http://localhost:${config_1.environmentConfig.PORT}/invite/workspace?role=${role}&workspaceId=${workspaceId}`;
}
exports.createWorkspaceInviteLink = createWorkspaceInviteLink;
function createAccountActivationLink({ token }) {
    return `http://localhost:${config_1.environmentConfig.PORT}/account/activate/${token}`;
}
exports.createAccountActivationLink = createAccountActivationLink;
function createForgotPasswordLink(token) {
    const baseUrl = config_1.environmentConfig.NODE_ENV === ('development' || 'testing')
        ? `http://localhost:${config_1.environmentConfig.PORT}/api/v1/users/account/password/reset/${token}`
        : `${config_1.environmentConfig.BASE_URL}/api/v1/users/account/password/reset/${token}`;
    return baseUrl;
}
exports.createForgotPasswordLink = createForgotPasswordLink;
exports.default = Object.freeze({
    createWorkspaceInviteLink,
    createAccountActivationLink,
    createForgotPasswordLink
});

//# sourceMappingURL=createLinks.js.map
