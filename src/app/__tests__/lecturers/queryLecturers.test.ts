import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Query lecturer', () => {
	it('should not create lecturer', async () => {
		try {
			await supertest(app).post('/api/v1/lecturers/new').send({
				firstName: 'Jane',
				lastName: 'Doe',
			});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
	test('should query lecturer all lecturers', async () => {
		try {
			const response = await supertest(app).get('/api/v1/lecturers/all');
			expect(response.status).toMatchInlineSnapshot('500', '404');
			expect(response.body).toMatchInlineSnapshot(`
			Object {
			  "data": Object {},
			  "message": "Lecturers not found",
			  "status": "warning",
			  "statusCode": 404,
			}
		`);
		} catch (err) {
			expect(err).toMatchInlineSnapshot(`
			[Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoMatchInlineSnapshot[2m([22m[32mproperties[39m[2m, [22msnapshot[2m)[22m

			[1mMatcher error[22m: Expected [32mproperties[39m must be an object

			Expected properties has type:  string
			Expected properties has value: [32m"500"[39m]
		`);
			expect(err.message).toMatchInlineSnapshot(`
			"[2mexpect([22m[31mreceived[39m[2m).[22mtoMatchInlineSnapshot[2m([22m[32mproperties[39m[2m, [22msnapshot[2m)[22m

			[1mMatcher error[22m: Expected [32mproperties[39m must be an object

			Expected properties has type:  string
			Expected properties has value: [32m\\"500\\"[39m"
		`);
			expect(err.status).toMatchInlineSnapshot('undefined');
			expect(err.statusCode).toMatchInlineSnapshot('undefined');
		}
	});
	test('should query lecturer by id', async () => {
		try {
			const response = await supertest(app).get(
				'/api/v1/lecturers/lecturer/5e9b8f9b8f9b8e0f8c8f4b6',
			);
			expect(response.status).toMatchInlineSnapshot('400');
			expect(response.body).toMatchInlineSnapshot(`
			Object {
			  "data": Object {},
			  "message": "Lecturer id is invalid",
			  "status": "warning",
			  "statusCode": 400,
			}
		`);
		} catch (err) {
			expect(err).toMatchInlineSnapshot();
			expect(err.message).toMatchInlineSnapshot();
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
		}
	});
});
