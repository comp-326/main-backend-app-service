import { createAdminEntity } from './../../entities';

describe('Create admin', () => {
	it('Should create a new admin', async () => {
		const user = await createAdminEntity({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			role: 'admin',
		});
		expect(user).toBeDefined();
		expect(user.getEmail()).toBe('test@gmail.com');
		expect(user.getRole()).toBe('admin');
	});
});
