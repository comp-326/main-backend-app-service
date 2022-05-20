"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailRegex_1 = __importDefault(require("../../../constants/emailRegex"));
class UserInfoValidator {
    constructor() {
        this.isValidEmail = (email) => {
            const mailRegex = new RegExp(emailRegex_1.default);
            return mailRegex.test(email);
        };
        this.isValidPassword = ({ fields, props }) => {
            let errors = '';
            try {
                for (const key of Object.keys(props)) {
                    if (fields.some(f => f.fieldName === key)) {
                        const regex = new RegExp(props[key], 'i');
                        const field = fields.find(f => f.fieldName === key);
                        if (regex.test(props['password']))
                            errors += `Password should not contain your ${field.name}\n`;
                    }
                }
                if (props['password'].length > 25)
                    errors += 'Password must should not be more than 25 characters\n';
                if (!/[a-z]/.test(props['password']))
                    errors += 'Password must contain at least 1 lowercase letter\n';
                if (!/[A-Z]/.test(props['password']))
                    errors += 'Password must contain at least 1 uppercase letter\n';
                if (!/[0-9]/.test(props['password']))
                    errors += 'Password must contain at least a number\n';
                if (!/[\w]{7,16}/.test(props['password']))
                    errors += 'Password must be at least 8 characters long\n';
                if (/[.*+?^${}#%^@!`()|[\]\\]{4,}/.test(props['password'])) {
                    errors +=
                        'Password must not contain more than 4 repeating characters\n';
                }
                if (!/[.*+?^${}#%^@!`()|[\]\\]/.test(props['password'])) {
                    errors +=
                        'Password must be at least 1 special character (.*+?^${}#%^@!`())\n';
                }
                if (errors !== '')
                    return { ok: false, errors };
                return { ok: true, errors };
            }
            catch (err) {
                return { ok: false, errors };
            }
        };
    }
}
exports.default = new UserInfoValidator();

//# sourceMappingURL=userInfoValidator.js.map
