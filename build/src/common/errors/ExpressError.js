"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressError = void 0;
class ExpressError extends Error {
    constructor({ data, message, status, statusCode }) {
        super(message);
        this.toJSON = () => {
            return {
                message: this.message,
                status: this.status,
                statusCode: this.statusCode,
                data: this.data
            };
        };
        this.message = message;
        this.status = status;
        this.statusCode = statusCode;
        this.data = data;
    }
}
exports.ExpressError = ExpressError;

//# sourceMappingURL=ExpressError.js.map
