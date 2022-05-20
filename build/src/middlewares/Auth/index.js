"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRequired = exports.loginRequired = void 0;
const userPermissions_1 = __importDefault(require("../../constants/userPermissions"));
const models_1 = __importDefault(require("../../features/userRoles/models"));
const tokenGEN_1 = __importDefault(require("../../utils/jwt/tokenGEN"));
const models_2 = __importDefault(require("../../features/users/models"));
const config_1 = require("../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyCookie = (req, res, next) => {
    try {
        if (!req.cookies) {
            return res.status(401).json({
                message: 'Please login to access this page',
                status: 'warning',
                statusCode: 401,
                data: {}
            });
        }
        const token = req.cookies['access_token'];
        if (!token) {
            return res.status(401).json({
                message: 'Please login to access this page',
                status: 'warning',
                statusCode: 401,
                data: {}
            });
        }
        const jwtToken = tokenGEN_1.default.decodeEncodedToken(token);
        if (!jwtToken) {
            return res.status(401).json({
                message: 'Please login to access this page',
                status: 'warning',
                statusCode: 401,
                data: {}
            });
        }
        const payload = jsonwebtoken_1.default.verify(jwtToken, config_1.environmentConfig.SECRET_KEY);
        req.user = payload;
        return next();
    }
    catch (_a) {
        return res.status(401).json({
            message: 'Login session has expired',
            status: 'warning',
            statusCode: 401,
            data: {}
        });
    }
};
const loginRequired = async (req, res, next) => {
    try {
        verifyCookie(req, res, async () => {
            const user = await models_2.default.findById(req.user.userId);
            if (!user) {
                return res.status(401).json({
                    message: 'Please login to access this page',
                    status: 'warning',
                    statusCode: 401,
                    data: {}
                });
            }
            if (!user.isActive) {
                return res.status(401).json({
                    message: 'Please activate your account',
                    status: 'warning',
                    statusCode: 401,
                    data: {}
                });
            }
            const role = await models_1.default.findById(user.role);
            const permitted = role.hasPermission(userPermissions_1.default.USER);
            if (!permitted)
                return res.sendStatus(403);
            return next();
        });
    }
    catch (error) {
        return next(error);
    }
};
exports.loginRequired = loginRequired;
const adminRequired = async (req, res, next) => {
    try {
        (0, exports.loginRequired)(req, res, async () => {
            const user = await models_2.default.findById(req.user.userId);
            const role = await models_1.default.findById(user.role);
            const permitted = role.hasPermission(userPermissions_1.default.ADMIN);
            if (!permitted)
                return res.sendStatus(403);
            return next();
        });
    }
    catch (error) {
        return next(error);
    }
};
exports.adminRequired = adminRequired;

//# sourceMappingURL=index.js.map
