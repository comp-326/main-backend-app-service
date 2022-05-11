/* eslint-disable @typescript-eslint/no-explicit-any */
import { rabbitMqConfig } from '@backend-service-config';
import { Channel, Connection } from 'amqplib-as-promised';

class EventBus{
	private connection: Connection;

	private queue: string;
  
	constructor(queue: string){
		this.queue = queue;
		this.connection = new Connection(rabbitMqConfig.url);
	}
  
	public sendToQueue = async (message: string): Promise<void> => {
		await this.connection.init();
		const channel = await this.connection.createChannel();
		await channel.assertQueue(this.queue);
		await channel.sendToQueue(this.queue, Buffer.from(message.toString()));
		await this.closeConnection(channel);
	};
  
	public consumeQueue = async (callback: any): Promise<void> => {
		await this.connection.init();
		const channel = await this.connection.createChannel();
		await channel.assertQueue(this.queue);
		await channel.consume(this.queue, (msg) => {
			if (msg !== null) {
				callback(msg.content.toString()).then(() => {
					channel.ack(msg);
				});
			}
		});
		await this.closeConnection(channel);
	};
  
	public closeConnection = async (channel: Channel): Promise<void> => {
		await channel.close();
		await this.connection.close();
	};
}
  
export default EventBus;