"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../../../config");
class Mailer {
    constructor() {
        this.setHost = (host) => {
            this.host = host;
            return this;
        };
        this.getHost = () => this.host;
        this.setPort = (port) => {
            this.port = port;
            return this;
        };
        this.getPort = () => this.port;
        this.setProxy = (proxy) => {
            this.proxy = proxy;
            return this;
        };
        this.getProxy = () => this.proxy;
        this.setSecure = (secure) => {
            this.secure = secure;
            return this;
        };
        this.getSecure = () => this.secure;
        this.setMailerUsername = (username) => {
            this.username = username;
            return this;
        };
        this.getMailerUsername = () => this.username;
        this.setMailerPassword = (password) => {
            this.password = password;
            return this;
        };
        this.getMailerPassword = () => this.password;
        this.setTransporterOptions = () => {
            const options = {
                proxy: this.getProxy(),
                host: this.getHost(),
                port: this.getPort(),
                secure: this.getSecure(),
                auth: {
                    user: this.getMailerUsername(),
                    pass: this.getMailerPassword()
                }
            };
            return nodemailer_1.default.createTransport(options);
        };
        this.sendMail = (mailOptions) => {
            const transporter = this.setTransporterOptions();
            return transporter.sendMail(Object.assign({}, mailOptions));
        };
        this.host = '';
        this.port = 0;
        this.secure = false;
        this.username = '';
        this.password = '';
        this.proxy = '';
    }
}
const ostrichMailer = new Mailer();
ostrichMailer.setHost(config_1.mailConfig.EMAIL_HOST)
    .setMailerPassword(config_1.mailConfig.EMAIL_PASSWORD)
    .setPort(config_1.mailConfig.EMAIL_PORT)
    .setSecure(config_1.mailConfig.EMAIL_SECURE)
    .setMailerUsername(config_1.mailConfig.EMAIL_USER)
    .setProxy(config_1.mailConfig.EMAIL_PROXY);
exports.default = ostrichMailer;

//# sourceMappingURL=index.js.map
