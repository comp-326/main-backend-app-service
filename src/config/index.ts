/* eslint-disable @typescript-eslint/naming-convention */
import config from '@backend-service/node.config';

const {
	ENV,
	DB: {
		MONGOOSE
	},
	PATHS: { BASE_DIR },
	MAIL,
	CLOUDINARY,
	redisConfig,
	rabbitMqConfig
} = config;
const DB_URL =
	ENV.NODE_ENV === 'development' ?
		MONGOOSE.DATABASE_URL :
		ENV.NODE_ENV === 'production'
			? MONGOOSE.DATABASE_URL
			: MONGOOSE.TEST_DB_URL;

export {
	DB_URL,
	MAIL as mailConfig,
	ENV as environmentConfig,
	CLOUDINARY as cloudinaryConfig,
	BASE_DIR,
	redisConfig,
	rabbitMqConfig,
};
