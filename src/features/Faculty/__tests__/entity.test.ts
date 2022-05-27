import { createFacultyEntity } from '../entities';
describe('Create faculty', () => {
	it('Should create a new faculty', async () => {
		const faculty = createFacultyEntity({
			name: 'Science',
		});
		expect(faculty).toBeDefined();
		expect(faculty.getName()).toBe('Science');
	});
});
