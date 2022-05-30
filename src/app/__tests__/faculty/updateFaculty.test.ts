import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Update faculty', () => {
	it('Should Not update', async () => {
		try {
			const response = await supertest(app)
				.put('/api/v1/faculty/update/ddfrroodwobcobueb')
				.send({
					name: 'Test Faculty',
				});
			expect(response.status).toMatchInlineSnapshot('400');
			expect(response.body).toMatchInlineSnapshot(`
			Object {
			  "data": Object {},
			  "message": "Invalid faculty id",
			  "status": "warning",
			  "statusCode": 400,
			}
		`);
			expect(response.body.data.name).toMatchInlineSnapshot('undefined');
			expect(response.body.data._id).toMatchInlineSnapshot('undefined');
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
	it('should not update faculty', async () => {
		try {
			await supertest(app).put('/api/v1/faculty/update/new').send({
				name: '',
			});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
});
