import createAdmin from '../../entities/index';
describe('Create admin Email test', () => {
	// Create admin
	it('Should create a new admin', async () => {
		const admin = await createAdmin({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			role: 'admin',
		});
		expect(admin).toBeDefined();
		expect(admin.getEmail()).toBe('test@gmail.com');
		expect(admin.getRole()).toBe('admin');
	});
	// Fail to create admin on unprovided email
	it('Should fail to create a new admin', async () => {
		try {
			const admin = await createAdmin({
				email: '',
				password: 'Test1234@0',
				role: 'admin',
			});
			expect(admin).toBeDefined();
			expect(admin.getEmail()).toBe(' ');
		} catch (e) {
			expect(e).toBeDefined();
		}
	});
	// Fail to create admin on invalid email
	it('Should fail to create a new admin on ', async () => {
		try {
			const admin = await createAdmin({
				email: 'testgmail',
				password: 'Test1234@0',
				role: 'admin',
			});
			expect(admin).toBeDefined();
			expect(admin.getEmail()).toBe('test@gmail');
			expect(admin.getRole()).toBe('admin');
		} catch (e) {
			expect(e.message).toBe('Please provide a valid email');
		}
	});
	// Fail on invalid email
	it('Should fail to create a new admin', async () => {
		try {
			const admin = await createAdmin({
				email: 'test@gmail',
				password: 'Test1234@0',
				role: 'admin',
			});
			expect(admin).toBeDefined();
			expect(admin.getEmail()).toBe('test@gmail');
			expect(admin.getRole()).toBe('admin');
		} catch (e) {
			expect(e).toBeDefined();
		}
	});
	it('Should  create a new admin', async () => {
		const admin = await createAdmin({
			email: 'test@gmail.com',
			password: 'Test1234@0',
			role: '62867c9882c5e09e4908f4b6',
		});
		expect(admin).toBeDefined();
		expect(admin.getEmail()).toBe('test@gmail.com');
		expect(admin.getRole()).toBe('62867c9882c5e09e4908f4b6');
	});
});
