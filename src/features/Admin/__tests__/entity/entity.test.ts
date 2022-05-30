import createAdmin from '../../entities/index';
describe('createAdmin', () => {
	it('Should create a new user', async () => {
		const user = await createAdmin({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			role: 'admin',
		});
		expect(user).toBeDefined();
		expect(user.getEmail()).toMatchInlineSnapshot('"test@gmail.com"');
		expect(user.getRole()).toMatchInlineSnapshot('"admin"');
	});
});
