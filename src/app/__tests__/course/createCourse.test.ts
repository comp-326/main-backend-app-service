import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create course', () => {
	test('should not create course', async () => {
		try {
			await supertest(app).post('/api/v1/courses/new').send({
				name: 'Science',
				department: '',
			});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
	test('should  create course', async () => {
		try {
			const response = await supertest(app)
				.post('/api/v1/courses/new')
				.send({
					name: 'Science',
					department: '62867c9882c5e09e4908f4b6',
				});
			expect(response.body).toMatchInlineSnapshot(`
			Object {
			  "data": Object {},
			  "message": "Course code is required",
			  "status": "warning",
			  "statusCode": 400,
			}
		`);
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
});
