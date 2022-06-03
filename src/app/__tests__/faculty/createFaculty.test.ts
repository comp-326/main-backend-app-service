import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create faculty', () => {
	it('Should create a faculty', async () => {
		const response = await supertest(app).post('/api/v1/faculty/new').send({
			name: 'Test Faculty',
		});
		expect(response.status).toMatchInlineSnapshot('500', '200');
		expect(response.body).toMatchInlineSnapshot(`
		Object {
		  "data": Object {
		    "__v": 0,
		    "_id": "629771ffa56a08092a780e0d",
		    "createdAt": "2022-06-01T14:04:47.724Z",
		    "name": "Test Faculty",
		    "updatedAt": "2022-06-01T14:04:47.724Z",
		  },
		}
	`);
		expect(response.body.data.name).toMatchInlineSnapshot(
			'undefined',
			'"Test Faculty"',
		);
		expect(response.body.data._id).toMatchInlineSnapshot(
			'undefined',
			'"629771ffa56a08092a780e0d"',
		);
	});
	it('should not create faculty', async () => {
		try {
			await supertest(app).post('/api/v1/faculty/new').send({
				name: '',
			});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
});
