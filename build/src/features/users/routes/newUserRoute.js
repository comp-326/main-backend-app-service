"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const repository_1 = __importDefault(require("../repository"));
const use_cases_1 = require("../use-cases");
function newUserRoute(app) {
    return (pathName) => {
        const userUseCase = new use_cases_1.UserUseCase(repository_1.default);
        const controller = new controllers_1.default(userUseCase);
        const userRouter = (0, express_1.Router)();
        app.use(`${pathName}`, userRouter);
        userRouter.post('/account/register', controller.createUser);
    };
}
exports.default = newUserRoute;

//# sourceMappingURL=newUserRoute.js.map
