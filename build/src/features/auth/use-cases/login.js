"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressError_1 = require("../../../common/errors/ExpressError");
const passwords_1 = __importDefault(require("../../../utils/passwords"));
function createLoginUseCase({ repository }) {
    return async (userData) => {
        if (!userData.email) {
            throw new ExpressError_1.ExpressError({
                data: {},
                message: 'Email required',
                status: 'warning',
                statusCode: 400
            });
        }
        if (!userData.password) {
            throw new ExpressError_1.ExpressError({
                data: {},
                message: 'Password required',
                status: 'warning',
                statusCode: 400
            });
        }
        const user = await repository.getUserByEmail(userData.email);
        if (!user) {
            throw new ExpressError_1.ExpressError({
                data: {},
                message: 'Account does not exist',
                status: 'warning',
                statusCode: 404
            });
        }
        if (!(await passwords_1.default.comparePassword(userData.password, user.password))) {
            throw new ExpressError_1.ExpressError({
                data: {},
                message: 'Invalid login credentials',
                status: 'warning',
                statusCode: 404
            });
        }
        if (!user.isActive) {
            throw new ExpressError_1.ExpressError({
                data: {},
                message: 'Account is not active',
                status: 'warning',
                statusCode: 404
            });
        }
        return user._doc;
    };
}
exports.default = createLoginUseCase;

//# sourceMappingURL=login.js.map
