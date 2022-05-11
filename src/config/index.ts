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

export {
	MONGOOSE as mongoConfig,
	MAIL as mailConfig,
	ENV as environmentConfig,
	CLOUDINARY as cloudinaryConfig,
	BASE_DIR,
	redisConfig,
	rabbitMqConfig
};
