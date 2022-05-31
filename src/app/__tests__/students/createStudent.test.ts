import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create student', () => {
	it('should not create student', async () => {
		try {
			await supertest(app).post('/api/v1/students/new').send({
				firstName: 'Jane',
				lastName: 'Doe',
			});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
	test('should create student', async () => {
		try {
			await supertest(app).post('/api/v1/students/new').send({
				firstName: 'Jane',
				lastName: 'Doe',
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
	test('should not create student', async () => {
		try {
			await supertest(app).post('/api/v1/students/new').send({
				firstName: 'Jane',
				lastName: 'Doe',
				email: 'jDoe@gamil.com',
				gender: 'female',
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
	test('should create student', async () => {
		try {
			await supertest(app).post('/api/v1/students/new').send({
				firstName: 'Jane',
				lastName: 'Doe',
				email: 'jDoe@gamil.com',
				gender: 'female',
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
	test('should not create student', async () => {
		try {
			await supertest(app).post('/api/v1/students/new').send({
				firstName: 'Jane',
				lastName: 'Doe',
				email: 'jDoe@gamil.com',
				gender: 'female',
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
	test('should create student', async () => {
		try {
			await supertest(app).post('/api/v1/students/new').send({
				firstName: 'Jane',
				lastName: 'Doe',
				email: 'jDoe@gamil.com',
				gender: 'female',
				password: '1234',
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
