import chalk from 'chalk';
import moment from 'moment';
import { mongoLogger } from '@exam-cell-utils/logger';
import mongoose from 'mongoose';
import {  environmentConfig, mongoUrl } from '@exam-cell-config';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { NODE_ENV } = environmentConfig;


const options = {
	autoIndex: true, // Don't build indexes
	maxPoolSize: 10, // Maintain up to 10 socket connections
	serverSelectionTimeoutMS: 50000, // Keep trying to send operations for 10 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect(mongoUrl, options);

mongoose.connection.on('connected', () => {
	const time = moment(new Date().getTime()).format('LLLL');
	mongoLogger.info({
		message: 'Mongoose connected',
		timestamp: time,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV,
	});
});
mongoose.connection.on('disconnected', () => {
	mongoLogger.info({
		message: 'Mongoose dis-connected',
		timestamp: `${moment(new Date().getTime()).format('LLLL')}`,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV,
	});
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
mongoose.connection.on('error', (err: any) => {
	const time = moment(new Date().getTime()).format('LLLL');
	mongoLogger.error({
		message: 'Mongoose Disconnected',
		reason: `${err.message}`,
		timestamp: `${time}`,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV,
	});
});
mongoose.connection.on('reconnected', () => {
	mongoLogger.info({
		message: 'Mongoose re-connected',
		timestamp: `${chalk.yellow(
			moment(new Date().getTime()).format('LLLL'),
		)}`,
		level: 'info',
		service: 'Mongoose',
		environment: NODE_ENV,
	});
});

export default mongoose;
