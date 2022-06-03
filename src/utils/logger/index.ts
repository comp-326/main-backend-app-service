/* eslint-disable @typescript-eslint/no-unused-vars */
import { BASE_DIR } from '@exam-cell-config';
import moment from 'moment';
import path from 'path';
import winston from 'winston';
import { IRequest, IResponse } from '@exam-cell-common/types';

/**
 * ----------------------------  LOG HTTP ERROR REQUESTS OPTIONS -------------------------
 */
export const httpErrorLogOptions = {
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: path.join(
				path.dirname(BASE_DIR),
				'logs',
				'http-error-logs',
				`${moment().format('YYYY-MM-DD')}-http-error.json`,
			),
		}),
	],

	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json(),
		winston.format.timestamp({
			alias: 'timestamp',
			format: moment.HTML5_FMT.DATETIME_LOCAL_MS,
		}),
		winston.format.metadata(),
	),
	exitOnError: false,
};

/**
 * ---------------------------- LOG HTTP REQUESTS -----------------------------------
 */
export const httpLogOptions = {
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: path.join(
				path.dirname(BASE_DIR),
				'logs',
				'http-logs',
				`${moment(new Date().getTime()).format(
					'YYYY-MM-DD',
				)}-http-requests-logs.json`,
			),
		}),
	],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json(),
	),
	meta: true,
	msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms {{req.headers.user-agent}} {{req.headers.referer}} {{req.headers.host}} {{req.ip}}',
	expressFormat: true,
	colorize: false,
	// eslint-disable-next-line no-unused-vars
	ignoreRoute: function (req: IRequest, res: IResponse) {
		return false;
	},
};

const mongoLogOptions = {
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: path.join(
				path.dirname(BASE_DIR),
				'logs',
				'db-logs',
				`${moment(new Date().getTime()).format(
					'YYYY-MM-DD',
				)}-db-logs.json`,
			),
		}),
	],
	format: winston.format.combine(
		// winston.format.colorize(),
		winston.format.json(),
	),
	meta: true,
	expressFormat: true,
	colorize: false,
};

const mailLoggerOptions = {
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: path.join(
				path.dirname(BASE_DIR),
				'logs',
				'mail-logs',
				`${moment(new Date().getTime()).format(
					'YYYY-MM-DD',
				)}-mail-logs.json`,
			),
		}),
	],
	format: winston.format.combine(
		// winston.format.colorize(),
		winston.format.json(),
	),
	meta: true,
	expressFormat: true,
	colorize: false,
};

const errorLogOptions = {
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: path.join(
				path.dirname(BASE_DIR),
				'logs',
				'app-error-logs',
				`${moment(new Date().getTime()).format(
					'YYYY-MM-DD',
				)}-app-logs.json`,
			),
		}),
	],
	format: winston.format.combine(
		// winston.format.colorize(),
		winston.format.json(),
	),
	meta: true,
	expressFormat: true,
	colorize: false,
};

export const mongoLogger = winston.createLogger({
	...mongoLogOptions,
	exitOnError: false,
});

export const errorLogger = winston.createLogger({
	...errorLogOptions,
	exitOnError: false,
});

export const mailLogger = winston.createLogger({
	...mailLoggerOptions,
	exitOnError: false,
});
