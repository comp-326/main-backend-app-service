"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = __importDefault(require("../common/errors/ErrorHandler"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_winston_1 = __importDefault(require("express-winston"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const pages_1 = __importDefault(require("./pages"));
const compression_2 = __importDefault(require("../utils/compression"));
const v1_1 = __importDefault(require("../api/v1"));
const express_1 = __importDefault(require("express"));
const logger_1 = require("../utils/logger");
function default_1({ app }) {
    app.use(express_1.default.json({ limit: '30mb' }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, morgan_1.default)('dev'));
    app.use((0, compression_1.default)({ filter: compression_2.default }));
    app.use((0, cookie_parser_1.default)());
    app.use(express_winston_1.default.logger(Object.assign({}, logger_1.httpLogOptions)));
    app.use(express_winston_1.default.errorLogger(logger_1.httpErrorLogOptions));
    app.use((0, cors_1.default)({ origin: '*' }));
    app.enable('trust proxy');
    app.set('trust proxy', 1);
    if (process.env.NODE_ENV === 'production')
        app.use((0, helmet_1.default)());
    app.use('/api/v1/', (0, v1_1.default)());
    (0, pages_1.default)({ app });
    app.use(ErrorHandler_1.default);
    return app;
}
exports.default = default_1;

//# sourceMappingURL=express.js.map
