"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogOptions = exports.httpErrorLogOptions = void 0;
const config_1 = require("../../config");
const moment_1 = __importDefault(require("moment"));
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
exports.httpErrorLogOptions = {
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: path_1.default.join(path_1.default.dirname(config_1.BASE_DIR), 'logs', 'error.json')
        })
    ],
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.json(), winston_1.default.format.timestamp({
        alias: 'timestamp',
        format: moment_1.default.HTML5_FMT.DATETIME_LOCAL_MS
    }), winston_1.default.format.metadata()),
    exitOnError: false
};
exports.httpLogOptions = {
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: path_1.default.join(path_1.default.dirname(config_1.BASE_DIR), 'logs', `${(0, moment_1.default)(new Date().getTime()).format('YYYY-MM-DD')}-http-requests-logs.json`)
        })
    ],
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.json()),
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) {
        return false;
    }
};

//# sourceMappingURL=index.js.map
