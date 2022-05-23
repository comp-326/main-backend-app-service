import createUser from '../entities/index';
// import { mongoConfig } from '@exam-cell-config';
// import mongoose from '@exam-cell-db/mongodb';
// import userRoleModel from '@exam-cell-features/userRoles/models';

describe('createUser', () => {
	// beforeAll(async () => {
	// 	await mongoose.connect(mongoConfig.TEST_DB_URL, {});
	// 	await mongoose.connection.dropDatabase();
	// 	await userRoleModel.InsertRoles();
	// });
	// afterAll(async () => {
	// 	await mongoose.connection.dropDatabase();
	// 	await mongoose.disconnect();
	// });
	it('Should create a new user', async () => {
		// try{
		const user = await createUser({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			firstName: 'testFirstName',
			lastName: 'testLastName',
			role: 'USER',
			profilePicture:
				'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
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
		expect(user.getProfilePic()).toBe(
			'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
		);
	});
});
