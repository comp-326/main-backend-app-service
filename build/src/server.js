"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
const app_1 = __importDefault(require("./app"));
const chalk_1 = __importDefault(require("chalk"));
const config_1 = require("./config");
const http_1 = __importDefault(require("http"));
const moment_1 = __importDefault(require("moment"));
const server = http_1.default.createServer(app_1.default);
server.listen(config_1.environmentConfig.PORT, () => {
    const time = (0, moment_1.default)(new Date().getTime()).format('LLLL');
    const connectionString = `Server started on ${chalk_1.default.yellow(time)} \nApp running running on ${chalk_1.default.bold.yellow(`http://localhost:${config_1.environmentConfig.PORT}`)}`;
    console.log(connectionString);
});

//# sourceMappingURL=server.js.map
