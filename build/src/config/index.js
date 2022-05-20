"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_DIR = exports.cloudinaryConfig = exports.environmentConfig = exports.mailConfig = exports.DB_URL = void 0;
const node_config_1 = __importDefault(require("../node.config"));
const { ENV, DB: { MONGOOSE }, PATHS: { BASE_DIR }, MAIL, CLOUDINARY, } = node_config_1.default;
exports.environmentConfig = ENV;
exports.BASE_DIR = BASE_DIR;
exports.mailConfig = MAIL;
exports.cloudinaryConfig = CLOUDINARY;
const DB_URL = ENV.NODE_ENV === 'development' ?
    MONGOOSE.DATABASE_URL :
    ENV.NODE_ENV === 'production'
        ? MONGOOSE.DATABASE_URL
        : MONGOOSE.TEST_DB_URL;
exports.DB_URL = DB_URL;

//# sourceMappingURL=index.js.map
