import { createLecturerEntity } from '../entities/index';
describe('create Lecturer Entity', () => {
	it('Should create a new lecturer', async () => {
		const lecturer = await createLecturerEntity({
			email: '',
			firstName: '',
			gender: 'male',
			lastName: '',
			password: '',
			role: '',
		});
		expect(lecturer).toBeDefined();
		expect(lecturer.getEmail()).toBe('test@gmail.com');
		expect(lecturer.getFirstName()).toBe('testFirstName');
		expect(lecturer.getLastName()).toBe('testLastName');
		expect(lecturer.getRole()).toBe('USER');
	});
});
