import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create faculty', () => {
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
