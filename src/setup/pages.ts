import { Application } from 'express';
import path from 'path';
import { BASE_DIR, environmentConfig } from './../config';

export default function ({ app }: { app: Application }){
	app.set('view engine', 'ejs');
	app.set('views', path.join(BASE_DIR, 'views'));
	app.get('/', (req, res) => {
		res.render('index', {
			data: {
				port: environmentConfig.PORT,
				appName: environmentConfig.APP_NAME
			}
		});
	});

	app.all('*', (req, res) => {
		res.status(404).json({
			message: 'Page not found',
			status: 'warning',
			statusCode: 404,
			data: {
				url: req.originalUrl,
				method: req.method,
				params: req.params,
				query: req.query,
				body: req.body
			}
		});
	});
}
