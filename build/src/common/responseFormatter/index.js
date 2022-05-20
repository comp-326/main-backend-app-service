"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseFormatter {
    ResponseWithData({ data, message, statusCode, params, status }) {
        return {
            data,
            message,
            statusCode,
            params,
            status
        };
    }
    ResponseWithStatusCode({ statusCode }) {
        return statusCode;
    }
    ResponseWithUnauthenticated() {
        return {
            data: {},
            message: 'Please login to access this page',
            statusCode: 401,
            params: {},
            status: 'warning'
        };
    }
}
exports.default = new ResponseFormatter();

//# sourceMappingURL=index.js.map
