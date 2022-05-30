import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create unit', () => {
	it('should not create unit', async () => {
		try {
			await supertest(app).post('/api/v1/units/new').send({
				name: 'Science',
				department: '',
			});
		} catch (err) {
			expect(err.status).toMatchInlineSnapshot();
			expect(err.statusCode).toMatchInlineSnapshot();
			expect(err.body).toMatchInlineSnapshot();
		}
	});
});
