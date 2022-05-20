"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../entities/index"));
describe('createUser', () => {
    it('Should create a new user', async () => {
        const user = await (0, index_1.default)({
            email: 'test@gmail.com',
            password: 'Test1234@0',
            firstName: 'testFirstName',
            lastName: 'testLastName',
            role: 'USER',
            profilePicture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            gender: 'other',
            bio: 'I am a self motivated user',
            isActive: false,
            isDeleted: false,
        });
        expect(user).toBeDefined();
        expect(user.getEmail()).toBe('test@gmail.com');
        expect(user.getFirstName()).toBe('testFirstName');
        expect(user.getLastName()).toBe('testLastName');
        expect(user.getRole()).toBe('USER');
        expect(user.getProfilePic()).toBe('https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50');
    });
});

//# sourceMappingURL=entity.test.js.map
