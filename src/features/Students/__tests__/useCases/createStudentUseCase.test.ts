import createStudentEntity from './../../entities';

describe('first', () => {
	it('Should throw exception', async () => {
		try {
			await createStudentEntity({
				course: '',
				department: '',
				email: '',
				firstName: '',
				gender: 'female',
				lastName: '',
				password: '',
				role: '',
			});
		} catch (e) {
			expect(e).toBeDefined();
		}
	});
});
