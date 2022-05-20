"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createForgotPasswordLink = exports.createAccountActivationLink = exports.createWorkspaceInviteLink = void 0;
const config_1 = require("../config");
function createWorkspaceInviteLink({ role, workspaceId, }) {
    return `http://localhost:${config_1.environmentConfig.PORT}/invite/workspace?role=${role}&workspaceId=${workspaceId}`;
}
exports.createWorkspaceInviteLink = createWorkspaceInviteLink;
function createAccountActivationLink({ token }) {
    return `http://localhost:${config_1.environmentConfig.PORT}/account/activate/${token}`;
}
exports.createAccountActivationLink = createAccountActivationLink;
function createForgotPasswordLink({ baseUrl, token }) {
    return `${baseUrl}/${token}`;
}
exports.createForgotPasswordLink = createForgotPasswordLink;
exports.default = Object.freeze({
    createWorkspaceInviteLink,
    createAccountActivationLink,
    createForgotPasswordLink,
});

//# sourceMappingURL=createLink.js.map
