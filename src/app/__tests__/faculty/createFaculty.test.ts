import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create faculty', () => {
	it('Should create a faculty', async () => {
		const response = await supertest(app).post('/api/v1/faculty/new').send({
			name: 'Test Faculty',
		});
		expect(response.status).toMatchInlineSnapshot('409');
		expect(response.body).toMatchInlineSnapshot(`
		Object {
		  "data": Object {
		    "error": "Name Test Faculty already exists",
		  },
		  "message": "Duplicate entry",
		  "status": "error",
		}
	`);
		expect(response.body.data.name).toMatchInlineSnapshot('undefined');
		expect(response.body.data._id).toMatchInlineSnapshot('undefined');
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
