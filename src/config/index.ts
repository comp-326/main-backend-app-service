/* eslint-disable @typescript-eslint/naming-convention */
import config from '../../node.config';

const {
	ENV,
	DB: { MONGOOSE: mongoConfig, POSTGRESQL: pgConfig, MYSQL: mysqlConfig },
	PATHS: { BASE_DIR },
	MAIL,
	CLOUDINARY: cloudinaryConfig,
	REDIS: redisConfig,
	MPESA: mpesaConfig,
} = config;
const mongoUrl =
	ENV.NODE_ENV === 'development'
		? mongoConfig.DATABASE_URL
		: ENV.NODE_ENV === 'production'
			? mongoConfig.DATABASE_URL
			: mongoConfig.TEST_DB_URL;

export {
	mongoUrl,
	MAIL as mailConfig,
	ENV as environmentConfig,
	cloudinaryConfig,
	BASE_DIR,
	pgConfig,
	mysqlConfig,
	redisConfig,
	mpesaConfig,
};
