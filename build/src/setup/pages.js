"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config_1 = require("./../config");
function default_1({ app }) {
    app.set('view engine', 'ejs');
    app.set('views', path_1.default.join(config_1.BASE_DIR, 'views'));
    app.get('/', (req, res) => {
        res.render('index', {
            data: {
                port: config_1.environmentConfig.PORT,
                appName: config_1.environmentConfig.APP_NAME
            }
        });
    });
    app.all('*', (req, res) => {
        res.status(404).json({
            message: 'Page not found',
            status: 'warning',
            statusCode: 404,
            data: {
                url: req.originalUrl,
                method: req.method,
                params: req.params,
                query: req.query,
                body: req.body
            }
        });
    });
}
exports.default = default_1;

//# sourceMappingURL=pages.js.map
