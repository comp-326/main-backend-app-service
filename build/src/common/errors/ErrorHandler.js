"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressError_1 = require("./ExpressError");
const capitalize_1 = __importDefault(require("../../helpers/capitalize"));
function default_1(err, req, res, next) {
    if (err instanceof ExpressError_1.ExpressError) {
        const error = err;
        return res.status(error.statusCode).json(Object.assign({}, error));
    }
    if (err.name === 'ValidationError') {
        const error = [];
        for (const key of Object.keys(err['errors']))
            error.push(`${(0, capitalize_1.default)(key)} field is required`);
        return res.status(400).json({
            data: {
                error
            },
            status: 'error',
            message: 'Invalid inputs'
        });
    }
    if (err.code === 11000) {
        let error = '';
        const x = err['keyValue'];
        for (const key of Object.keys(x))
            error += `${(0, capitalize_1.default)(key)} ${x[key]} already exists`;
        return res.status(409).json({
            status: 'error',
            message: 'Duplicate entry',
            data: { error }
        });
    }
    return res.status(500).json({
        status: 'error',
        message: err.message ? err.message : 'Internal server error',
        data: {}
    });
}
exports.default = default_1;

//# sourceMappingURL=ErrorHandler.js.map
