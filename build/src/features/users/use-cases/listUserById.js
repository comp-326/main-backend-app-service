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
exports.makeListUserById = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
const ObjectId_validator_1 = __importDefault(require("../../../utils/mongo/ObjectId-validator"));
function makeListUserById({ repository }) {
    return async (id) => {
        if (!id) {
            throw new ExpressError_1.ExpressError({
                message: 'User id not provided',
                status: 'error',
                statusCode: 400,
                data: {
                    userId: id
                }
            });
        }
        if (!(0, ObjectId_validator_1.default)(id)) {
            throw new ExpressError_1.ExpressError({
                message: 'Please provide a valid user id',
                status: 'error',
                statusCode: 400,
                data: {}
            });
        }
        const user = await repository.findById(id);
        if (!user) {
            throw new ExpressError_1.ExpressError({
                message: 'User not found',
                status: 'error',
                statusCode: 404,
                data: {
                    userId: id
                }
            });
        }
        const _a = user._doc, { password: _docs } = _a, props = __rest(_a, ["password"]);
        return props;
    };
}
exports.makeListUserById = makeListUserById;

//# sourceMappingURL=listUserById.js.map
