"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const use_cases_1 = require("../use-cases");
const express_1 = require("express");
const repository_1 = __importDefault(require("../repository"));
function loginUserRoute(app) {
    return (pathName) => {
        const authUseCase = new use_cases_1.AuthUseCase(repository_1.default);
        const controller = new controllers_1.AuthController(authUseCase);
        const userRouter = (0, express_1.Router)();
        app.use(`${pathName}`, userRouter);
        userRouter.post('/login', controller.login);
    };
}
exports.default = loginUserRoute;

//# sourceMappingURL=loginUserRoute.js.map
