import { createStudentEntity } from '../../entities';

describe('Create student', () => {
	it('Should create a new student', async () => {
		const student = await createStudentEntity({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			firstName: 'testFirstName',
			lastName: 'testLastName',
			role: 'USER',
			course: '',
			department: '',
			gender: 'male',
		});
		expect(student).toBeDefined();
		expect(student.getEmail()).toBe('test@gmail.com');
		expect(student.getFirstName()).toBe('testFirstName');
		expect(student.getLastName()).toBe('testLastName');
		expect(student.getRole()).toBe('USER');
	});
});
