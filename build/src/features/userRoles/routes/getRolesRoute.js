"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const use_cases_1 = require("../use-cases");
const Auth_1 = require("../../../middlewares/Auth");
const repository_1 = __importDefault(require("../repository"));
function getUserRolesRoute(app) {
    return (pathName) => {
        const userRolesUseCase = new use_cases_1.UserRoleUseCases(repository_1.default);
        const controller = new controllers_1.UserRoleController(userRolesUseCase);
        const folderRouter = (0, express_1.Router)();
        app.use(`${pathName}`, folderRouter);
        folderRouter.get('/all', Auth_1.adminRequired, controller.getRoles);
    };
}
exports.default = getUserRolesRoute;

//# sourceMappingURL=getRolesRoute.js.map
