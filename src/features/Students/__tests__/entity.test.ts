import {createStudentEntity} from '../entities';

describe('Create student', () => {
	it('Should create a new student', async () => {
		const student = await createStudentEntity({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			firstName: 'testFirstName',
			lastName: 'testLastName',
			role: 'USER',
			profilePicture:
				'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
			gender: 'other',
			bio: 'I am a self motivated student',
			isActive: false,
			isDeleted: false,
		});
		expect(student).toBeDefined();
		expect(student.getEmail()).toBe('test@gmail.com');
		expect(student.getFirstName()).toBe('testFirstName');
		expect(student.getLastName()).toBe('testLastName');
		expect(student.getRole()).toBe('USER');
		expect(student.getProfilePic()).toBe(
			'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
		);
	});
});
