export type RedisConfigType = {
	host: string;
	port: 6379 | number|undefined;
	password: string;
	username: string;
	db: number;
};
