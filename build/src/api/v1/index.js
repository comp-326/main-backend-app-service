"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../features/auth"));
const testRoute_1 = __importDefault(require("./testRoute"));
const users_1 = __importDefault(require("../../features/users"));
const userRoles_1 = __importDefault(require("../../features/userRoles"));
const docs_1 = require("../../utils/docs");
const apiRoute = (0, express_1.Router)();
function default_1() {
    apiRoute.get('/test', testRoute_1.default);
    apiRoute.use('/docs', docs_1.swaggerServe, docs_1.swaggerSetup);
    (0, users_1.default)({ app: apiRoute, pathName: '/users' });
    (0, userRoles_1.default)({ app: apiRoute, pathName: '/u-roles' });
    (0, auth_1.default)({ app: apiRoute, pathName: '/auth' });
    return apiRoute;
}
exports.default = default_1;

//# sourceMappingURL=index.js.map
