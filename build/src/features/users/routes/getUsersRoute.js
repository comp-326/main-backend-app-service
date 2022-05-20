"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const repository_1 = __importDefault(require("../repository"));
const use_cases_1 = require("../use-cases");
const Auth_1 = require("../../../middlewares/Auth");
function getUsersRoute(app) {
    return (pathName) => {
        const userUseCase = new use_cases_1.UserUseCase(repository_1.default);
        const controller = new controllers_1.default(userUseCase);
        const userRouter = (0, express_1.Router)();
        app.use(`${pathName}`, userRouter);
        userRouter.get('/', Auth_1.adminRequired, controller.findUsers);
    };
}
exports.default = getUsersRoute;

//# sourceMappingURL=getUsersRoute.js.map
