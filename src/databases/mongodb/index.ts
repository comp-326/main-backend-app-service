import chalk from 'chalk';
import moment from 'moment';
import mongoose from 'mongoose';
import path from 'path';
import winston from 'winston';
import { BASE_DIR, DB_URL, environmentConfig } from '@backend-service-config';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { NODE_ENV } = environmentConfig;


const logger = winston.createLogger({
	format: winston.format.json(),
	defaultMeta: { service: 'user-service' },
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: path.join(path.dirname(BASE_DIR), 'logs', 'db-logs.json'),
			level: 'error'
		})
	],
	exitOnError: false
});
const options = {
	autoIndex: true, // Don't build indexes
	maxPoolSize: 10, // Maintain up to 10 socket connections
	serverSelectionTimeoutMS: 50000, // Keep trying to send operations for 10 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(DB_URL, options);

mongoose.connection.on('connected', () => {
	const time = moment(new Date().getTime()).format('LLLL');
	logger.info({
		message: 'Mongoose connected',
		timestamp: time,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV,
	});
});
mongoose.connection.on('disconnected', () => {
	logger.info({
		message: 'Mongoose dis-connected',
		timestamp: `${moment(new Date().getTime()).format('LLLL')}`,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV
	});
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
mongoose.connection.on('error', (err: any) => {
	const time = moment(new Date().getTime()).format('LLLL');
	logger.error({
		message: 'Mongoose Disconnected',
		reason: `${err.message}`,
		timestamp: `${time}`,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV
	});
});
mongoose.connection.on('reconnected', () => {
	logger.info({
		message: 'Mongoose re-connected',
		timestamp: `${chalk.yellow(moment(new Date().getTime()).format('LLLL'))}`,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV
	});
});

export default mongoose;
