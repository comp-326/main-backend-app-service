import app from '@exam-cell-app';
import supertest from 'supertest';

describe('POST | GET | PATCH | PUT | DELETE: unmapped route urls', () => {
	test('POST: should return 404', async () => {
		const response = await supertest(app).post('/some/route');
		expect(response.status).toMatchInlineSnapshot('404');
	});
	test('GET: should return 404', async () => {
		const response = await supertest(app).get('/some/route');
		expect(response.status).toMatchInlineSnapshot('404');
	});
	test('PUT: should return 404', async () => {
		const response = await supertest(app).put('/some/route');
		expect(response.status).toMatchInlineSnapshot('404');
	});
	test('PATCH: should return 404', async () => {
		const response = await supertest(app).patch('/some/route');
		expect(response.status).toMatchInlineSnapshot('404');
	});
	test('DELETE: should return 404', async () => {
		const response = await supertest(app).delete('/some/route');
		expect(response.status).toMatchInlineSnapshot('404');
	});
});
