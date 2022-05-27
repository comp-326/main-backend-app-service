import { createLecturerEntity } from '../entities/index';
describe('create Lecturer Entity', () => {
	it('Should create a new lecturer', async () => {
		const lecturer = await createLecturerEntity({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			firstName: 'testFirstName',
			lastName: 'testLastName',
			role: 'USER',
			profilePicture:
				'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
			gender: 'other',
			bio: 'I am a self motivated lecturer',
			isActive: false,
			isDeleted: false,
		});
		expect(lecturer).toBeDefined();
		expect(lecturer.getEmail()).toBe('test@gmail.com');
		expect(lecturer.getFirstName()).toBe('testFirstName');
		expect(lecturer.getLastName()).toBe('testLastName');
		expect(lecturer.getRole()).toBe('USER');
		expect(lecturer.getProfilePic()).toBe(
			'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
		);
	});
});
