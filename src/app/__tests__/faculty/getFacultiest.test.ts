import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Find  faculty', () => {
	it('Should find faculties', async () => {
		const response = await supertest(app).get('/api/v1/faculty/all');
		expect(response.status).toMatchInlineSnapshot('200', '404');
		expect(response.body).toMatchInlineSnapshot(`
		Object {
		  "data": Object {},
		  "message": "No faculties found",
		  "status": "warning",
		  "statusCode": 404,
		}
	`);
		expect(response.body.data.name).toMatchInlineSnapshot('undefined');
		expect(response.body.data._id).toMatchInlineSnapshot('undefined');
	});
	it('Should find faculties', async () => {
		const response = await supertest(app).get(
			'/api/v1/faculty/name/find?name=Test',
		);
		expect(response.status).toMatchInlineSnapshot('404');
		expect(response.body).toMatchInlineSnapshot(`
		Object {
		  "data": Object {},
		  "message": "Faculty not found",
		  "status": "warning",
		  "statusCode": 404,
		}
	`);
	});
	it('Should find faculties', async () => {
		const response = await supertest(app).get(
			'/api/v1/faculty/find/id/someId',
		);
		expect(response.status).toMatchInlineSnapshot('404');
		expect(response.body).toMatchInlineSnapshot(`
		Object {
		  "data": Object {},
		  "message": "Invalid faculty id",
		  "status": "warning",
		  "statusCode": 404,
		}
	`);
	});
});
