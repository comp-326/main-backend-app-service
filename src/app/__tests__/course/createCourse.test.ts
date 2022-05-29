import app from '@exam-cell-app';
import supertest from 'supertest';

describe('Create course', () => {
	it('should not create course', async () => {
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
});
