"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressError_1 = require("../../../common/errors/ExpressError");
function makeCreateUserEntity({ validator, passwordUtil }) {
    return async function createUser({ email, firstName, lastName, password: userPassword, isActive, role, bio, gender, isDeleted, profilePicture }) {
        const { isValidEmail, isValidPassword } = validator;
        const { hashPassword } = passwordUtil;
        if (!isValidEmail(email)) {
            throw new ExpressError_1.ExpressError({
                message: 'Please provide a valid email',
                statusCode: 400,
                status: 'warning',
                data: {}
            });
        }
        if (!firstName) {
            throw new ExpressError_1.ExpressError({
                message: 'First name required',
                data: {},
                statusCode: 400,
                status: 'warning'
            });
        }
        if (!lastName) {
            throw new ExpressError_1.ExpressError({
                message: 'Last name required',
                data: {},
                status: 'warning',
                statusCode: 400
            });
        }
        if (!userPassword) {
            throw new ExpressError_1.ExpressError({
                message: 'Password required',
                data: {},
                status: 'warning',
                statusCode: 400
            });
        }
        if (userPassword && userPassword.length < 50) {
            const { ok, errors } = isValidPassword({
                props: { firstName, lastName, password: userPassword },
                fields: [
                    { fieldName: 'firstName', name: 'First name' },
                    { fieldName: 'email', name: 'Email address' },
                    { fieldName: 'lastName', name: 'Last name' }
                ]
            });
            if (!ok) {
                throw new ExpressError_1.ExpressError({
                    message: 'Invalid password',
                    statusCode: 400,
                    data: errors.replace(/[\t]/, '').trim().split(/\n/),
                    status: 'warning'
                });
            }
        }
        if (userPassword && userPassword.length < 50)
            userPassword = await hashPassword(userPassword);
        return Object.freeze({
            getFirstName: () => firstName,
            getLastName: () => lastName,
            getBio: () => bio,
            getIsActive: () => (isActive ? isActive : false),
            getRole: () => (role ? role : 'user'),
            getProfilePic: () => profilePicture,
            getPassword: () => userPassword,
            getIsDelete: () => isDeleted,
            getGender: () => gender,
            getEmail: () => email
        });
    };
}
exports.default = makeCreateUserEntity;

//# sourceMappingURL=user.js.map
