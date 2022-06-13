/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const config = {
	ENV: {
		PORT: process.env.PORT || 6200,
		API_PREFIX: process.env.API_PREFIX || '/api/v1',
		APP_NAME: process.env.APP_NAME || 'exam cellautomaton app',
		NODE_ENV: process.env.NODE_ENV!,
		SECRET_KEY: process.env.SECRET_KEY!,
		REFRESH_KEY: process.env.REFRESH_KEY!,
		BASE_URL: process.env.BASE_URL!,
		ENC_KEY: process.env.ENC_KEY!,
	},
	MAIL: {
		EMAIL_USER: process.env.EMAIL_USER || '',
		EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
		EMAIL_HOST: process.env.EMAIL_HOST || '',
		EMAIL_FROM: process.env.EMAIL_FROM || '',
		EMAIL_PORT: parseInt(<string>process.env.EMAIL_PORT) || 0,
		EMAIL_SECURE: process.env.EMAIL_SECURE === 'true' ? true : false,
		EMAIL_PROXY: process.env.EMAIL_PROXY || '',
	},

	PATHS: {
		BASE_DIR: path.join(__dirname, 'src'),
	},
	CLOUDINARY: {
		CLOUDINARY_NAME: process.env.CLOUDINARY_NAME!,
		CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
		CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET!,
	},
	DB: {
		MONGOOSE: {
			DATABASE_URL: process.env.DATABASE_URL!,
			TEST_DB_URL: process.env.TEST_DB_URL!,
		},
		MONGO_DB: {
			DB_USER: '',
			DB_PASSWORD: '',
			DB_NAME: '',
			DB_PORT: process.env.MONGO_PORT || 27017,
		},
		MYSQL: {
			DB_USER: process.env.MYSQL_USER || 'root',
			DB_PASSWORD: process.env.MYSQL_PASSWORD || '',
			DB_NAME: process.env.MYSQL_DB || 'exam_cell',
			DB_PORT: parseInt(<string>process.env.MYSQL_PORT) || 3306,
		},
		POSTGRESQL: {
			DB_USER: process.env.POSTGRES_USER || 'postgres',
			DB_PASSWORD: process.env.POSTGRES_PASSWORD || '',
			DB_NAME: process.env.POSTGRES_DB || 'exam_cell',
			DB_PORT: parseInt(<string>process.env.POSTGRES_PORT) || 3306,
		},
	},
	REDIS: {
		host: process.env.REDIS_HOST! || ('127.0.0.1' as string),
		port: parseInt(<string>process.env.REDIS_PORT) || 6379,
		password: process.env.REDIS_PASSWORD! || ('' as string),
		username: process.env.REDIS_USERNAME! || ('' as string),
		db: parseInt(<string>process.env.REDIS_DB) || 0,
	},
	RABBIT: {
		url: process.env.RABBITMQ_URL || 'amqp://localhost',
	},
	MPESA: {
		MPESA_CONSUMER_KEY: process.env.MPESA_CONSUMER_KEY || '',
		MPESA_AUTH_KEY:
			Buffer.from(
				`${process.env.MPESA_CONSUMER_KEY!}:${process.env.MPESA_CONSUMER_SECRET!}`,
			).toString('base64') || '',
		MPESA_CONSUMER_SECRET: process.env.MPESA_CONSUMER_SECRET || '',
		MPESA_ACCESS_TOKEN_URL: process.env.MPESA_ACCESS_TOKEN_URL || '',
		MPESA_STK_URL: process.env.MPESA_STK_URL || '',
		MPESA_BALANCE_URL: process.env.MPESA_BALANCE_URL || '',
		MPESA_STK_CHECK_URL: process.env.MPESA_STK_CHECK_URL || '',
		MPESA_STK_CALLBACK_URL: process.env.MPESA_STK_CALLBACK_URL || '',
		MPESA_STK_CALLBACK_IP: process.env.MPESA_STK_CALLBACK_IP || '',
		MPESA_STK_CALLBACK_CONFIRM_URL:
			process.env.MPESA_STK_CALLBACK_CONFIRM_URL || '',
	},
};

export default config;
