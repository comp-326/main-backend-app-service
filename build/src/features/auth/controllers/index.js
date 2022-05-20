"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tokenGEN_1 = __importDefault(require("../../../utils/jwt/tokenGEN"));
class AuthController {
    constructor(authUseCase) {
        this.authUseCase = authUseCase;
        this.login = async (req, res, next) => {
            try {
                const _a = await this.authUseCase.login(req.body), { password: _use } = _a, props = __rest(_a, ["password"]);
                const authToken = tokenGEN_1.default.generateEncodedToken({
                    userId: props._id,
                    email: props.email
                });
                return res.cookie('access_token', authToken, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                    path: '/'
                }).json({
                    message: 'Login successful',
                    user: props
                });
            }
            catch (err) {
                return next(err);
            }
        };
        this.logout = async (req, res, next) => {
            return res.clearCookie('access_token').status(200).json({
                message: 'Account successfully logged out',
                success: true
            });
        };
    }
}
exports.AuthController = AuthController;

//# sourceMappingURL=index.js.map
