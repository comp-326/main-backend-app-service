"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressError_1 = require("../../../../common/errors/ExpressError");
const mailer_1 = __importDefault(require("../../../../services/mailService/mailer"));
const createLinks_1 = __importDefault(require("../../../../helpers/createLinks"));
const config_1 = require("../../../../config");
const moment_1 = __importDefault(require("moment"));
const tokenGenerator_1 = __importDefault(require("../../../../helpers/tokenGenerator"));
const mailService_1 = require("../../../../services/mailService");
class Accountmailer {
    constructor() {
        this.sendPasswordResetLink = () => {
            return async function ({ firstName, lastName, email, _id }) {
                let sent = false;
                const token = tokenGenerator_1.default.generatePasswordResetToken({ userId: _id })('24h');
                const link = createLinks_1.default.createForgotPasswordLink(token);
                const template = (0, mailService_1.passwordResetEmailTemplate)({
                    firstName,
                    lastName,
                    link
                });
                try {
                    const res = await mailer_1.default.sendMail({
                        to: email,
                        date: (0, moment_1.default)(new Date().getTime()).format('LLLL'),
                        from: config_1.mailConfig.EMAIL_USER,
                        sender: 'exam cell Info',
                        subject: 'Reset your password',
                        html: template
                    });
                    res && (sent = true);
                    return sent;
                }
                catch (err) {
                    throw new ExpressError_1.ExpressError({
                        message: err.message,
                        data: {},
                        status: 'error',
                        statusCode: 500
                    });
                }
            };
        };
        this.sendEmailActivationLink = () => {
            return async function ({ email, firstName, lastName, _id }) {
                let sent = false;
                const token = tokenGenerator_1.default.generatePasswordResetToken({ userId: _id })('24h');
                const link = createLinks_1.default.createAccountActivationLink({ token });
                const template = (0, mailService_1.accountActivationEmailTemplate)({
                    firstName,
                    lastName,
                    link
                });
                try {
                    const res = await mailer_1.default.sendMail({
                        to: email,
                        date: (0, moment_1.default)(new Date().getTime()).format('LLLL'),
                        sender: 'ExamCellAutomaton Info',
                        from: config_1.mailConfig.EMAIL_USER,
                        subject: 'Activate your account',
                        html: template
                    });
                    res && (sent = true);
                    return sent;
                }
                catch (err) {
                    throw new ExpressError_1.ExpressError({
                        message: err.message,
                        data: {},
                        status: 'error',
                        statusCode: 500
                    });
                }
            };
        };
    }
}
exports.default = new Accountmailer();

//# sourceMappingURL=UserAccountMailer.js.map
