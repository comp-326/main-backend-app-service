"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const path_1 = __importDefault(require("path"));
const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        version: '',
        title: '',
        description: '',
    },
    host: '',
    basePath: '',
    schemes: [],
    consumes: [],
    produces: [],
    tags: [
        {
            name: '',
            description: '',
        },
    ],
    securityDefinitions: {},
    definitions: {},
    components: {},
};
const outputFile = path_1.default.join(config_1.BASE_DIR, 'swagger-docs/api.json');
const endpointsFiles = [path_1.default.resolve(config_1.BASE_DIR, 'server.ts')];
swaggerAutogen(outputFile, endpointsFiles, doc);

//# sourceMappingURL=swagger.js.map
