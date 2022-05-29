import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create admin', () => {
	it('should not create admin', async () => {
		try {
			await supertest(app).post('/api/v1/admin/new').send({});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
	test('should create admin', async () => {
		try {
			await supertest(app).post('/api/v1/admin/new').send({
				email: 'jDoe@gamil.com',
				gender: 'female',
				password: '1234',
				role: '62867c9882c5e09e4908f4b6',
			});
		} catch (err) {
			expect(err).toMatchInlineSnapshot();
			expect(err.message).toMatchInlineSnapshot();
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
		}
	});
	test('should not create admin', async () => {
		try {
			await supertest(app).post('/api/v1/admin/new').send({
				email: 'jDoe@gamil.com',
				password: 'tesingsmall',
				role: '62867c9882c5e09e4908f4b6',
			});
		} catch (err) {
			expect(err).toMatchInlineSnapshot();
			expect(err.message).toMatchInlineSnapshot();
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
		}
	});
	test('should create admin', async () => {
		try {
			await supertest(app).post('/api/v1/admin/new').send({
				email: 'jDoe@gamil.com',
				password: 'testingSmall',
				role: '62867c9882c5e09e4908f4b6',
			});
		} catch (err) {
			expect(err).toMatchInlineSnapshot();
			expect(err.message).toMatchInlineSnapshot();
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
		}
	});
	test('should not create admin', async () => {
		try {
			await supertest(app).post('/api/v1/admin/new').send({
				email: 'jDoe@gamil.com',
				password: 'Te@33!',
				role: '62867c9882c5e09e4908f4b6',
			});
		} catch (err) {
			expect(err).toMatchInlineSnapshot();
			expect(err.message).toMatchInlineSnapshot();
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
		}
	});
	test('should create admin', async () => {
		try {
			await supertest(app).post('/api/v1/admin/new').send({
				email: 'jDoe@gamilcom',
				password: 'Te@33!rt@34',
				role: 'ddkdkk',
			});
		} catch (err) {
			expect(err).toMatchInlineSnapshot();
			expect(err.message).toMatchInlineSnapshot();
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
		}
	});
});
