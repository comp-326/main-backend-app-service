import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Query courses', () => {
	test('should get all courses', async () => {
		try {
			await supertest(app).post('/api/v1/courses/all').send({
				name: 'Science',
				department: '',
			});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
	test('should  update  course', async () => {
		try {
			const response = await supertest(app)
				.put('/api/v1/courses/update/didjodijddsiojo')
				.send({
					name: 'Science',
				});
			expect(response.body).toMatchInlineSnapshot(`
			Object {
			  "data": Object {},
			  "message": "Invalid course id required",
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
	test('should  get   course by id', async () => {
		try {
			const response = await supertest(app).get(
				'/api/v1/courses/course/didjodijddsiojo',
			);

			expect(response.body).toMatchInlineSnapshot(`
			Object {
			  "data": Object {},
			  "message": "Invalid course id",
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

	test('should  get department   courses', async () => {
		try {
			const response = await supertest(app).get(
				'/api/v1/courses/department/didjodijddsiojo',
			);

			expect(response.body).toMatchInlineSnapshot(`
			Object {
			  "data": Object {},
			  "message": "Invalid Department Id",
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
