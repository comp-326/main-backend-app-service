"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetup = exports.swaggerServe = void 0;
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const config_1 = require("../../config");
const swaggerDocument = config_1.environmentConfig.NODE_ENV === 'development'
    ? yamljs_1.default.load(path_1.default.join(config_1.BASE_DIR, 'swagger-docs/api.yml'))
    : null;
const options = {
    explorer: true,
    customSiteTitle: 'ExamCellAutomaton app API',
};
const swaggerSetup = swagger_ui_express_1.default.setup(swaggerDocument, options);
exports.swaggerSetup = swaggerSetup;
const swaggerServe = swagger_ui_express_1.default.serve;
exports.swaggerServe = swaggerServe;
exports.default = Object.freeze({ swaggerServe, swaggerSetup });

//# sourceMappingURL=index.js.map
