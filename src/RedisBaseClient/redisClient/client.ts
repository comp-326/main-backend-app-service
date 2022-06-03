/* eslint-disable @typescript-eslint/no-explicit-any */
import { RedisConfigType } from './types';
import redis, { Redis } from 'ioredis';

class RedisClient {
	private readonly _client: Redis;

	constructor({
		host = '127.0.0.1',
		port = 6379,
		password = '',
		username = '',
		db = 0,
	}: Partial<RedisConfigType>) {
		this._client = new redis({
			host,
			port,
			password,
			username,
			db,
		});
	}

	/**
	 *
	 * @param event Event names to watch for
	 * @param callback Callback that runs after the event
	 */
	public listen = async (
		event: string,
		callback: (data: string) => Promise<void>,
	) => {
		this._client.on(event, callback);
	};

	/**
	 *
	 * @param channel Client just pass a channel name for the subscriber to receive messages from
	 */
	public subscribe = async (channel: string): Promise<void> => {
		this._client.subscribe(channel);
	};

	/**
	 *
	 * @param {function} callback  Function that takes a callback function
	 * With channel to which it has subscribed to as first parameter
	 * With datais the data passed down to that channel via a publisher
	 * From a given channel passed as an argument and the data object passed down with it
	 */
	public getMessage = async (
		callback: (channel: string, data: any) => Promise<any>,
	): Promise<void> => {
		this.client.on('message', callback);
	};

	/**
	 *
	 * @param {string} channel Channel name that the client publishes to
	 * @param {string} data Data passed down to the client subscriber
	 */
	public publish = async (channel: string, data: string) => {
		this._client.publish(channel, data);
	};

	/**
	 * Get the client instance and run native redis commands
	 */
	get client() {
		return this._client;
	}
}

export { RedisClient };

export default RedisClient;
