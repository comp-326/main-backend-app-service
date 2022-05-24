import app from './app';
import chalk from 'chalk';
import { environmentConfig } from './config';
import http from 'http';
import moment from 'moment';

const server = http.createServer(app);

server.listen(environmentConfig.PORT, () => {
	const time = moment(new Date().getTime()).format('LLLL');
	const connectionString = `Server started on ${chalk.yellow(
		time,
	)} \nApp running running on ${chalk.bold.yellow(
		`http://localhost:${environmentConfig.PORT}`,
	)}`;
	console.log(connectionString);
});
