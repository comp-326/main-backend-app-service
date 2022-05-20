"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const moment_1 = __importDefault(require("moment"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
const config_1 = require("../../config");
const { NODE_ENV } = config_1.environmentConfig;
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: path_1.default.join(path_1.default.dirname(config_1.BASE_DIR), 'logs', 'db-logs.json'),
            level: 'error'
        })
    ],
    exitOnError: false
});
const options = {
    autoIndex: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 50000,
    socketTimeoutMS: 45000,
    family: 4
};
mongoose_1.default.connect(config_1.DB_URL, options);
mongoose_1.default.connection.on('connected', () => {
    const time = (0, moment_1.default)(new Date().getTime()).format('LLLL');
    logger.info({
        message: 'Mongoose connected',
        timestamp: time,
        level: 'info',
        service: 'Mongoose',
        environment: NODE_ENV,
    });
});
mongoose_1.default.connection.on('disconnected', () => {
    logger.info({
        message: 'Mongoose dis-connected',
        timestamp: `${(0, moment_1.default)(new Date().getTime()).format('LLLL')}`,
        level: 'info',
        service: 'Mongoose',
        environment: NODE_ENV
    });
});
mongoose_1.default.connection.on('error', (err) => {
    const time = (0, moment_1.default)(new Date().getTime()).format('LLLL');
    logger.error({
        message: 'Mongoose Disconnected',
        reason: `${err.message}`,
        timestamp: `${time}`,
        level: 'info',
        service: 'Mongoose',
        environment: NODE_ENV
    });
});
mongoose_1.default.connection.on('reconnected', () => {
    logger.info({
        message: 'Mongoose re-connected',
        timestamp: `${chalk_1.default.yellow((0, moment_1.default)(new Date().getTime()).format('LLLL'))}`,
        level: 'info',
        service: 'Mongoose',
        environment: NODE_ENV
    });
});
exports.default = mongoose_1.default;

//# sourceMappingURL=index.js.map
