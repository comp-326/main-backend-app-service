/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockMongoose } from 'mock-mongoose';
import mongoose from '@exam-cell-db/mongodb';

const mockMongoose: MockMongoose = new MockMongoose(mongoose);
const tearDownTests = async (done: (err: any) => void) => {
	afterAll(async () => {
		console.log('Finished on tests');

		await mockMongoose.killMongo();
		await mongoose.disconnect();
		done((err: any) => {
			if (err) 
				console.log(err.message);
			
			console.log('Finished on tests');
		});
	});
};

export default tearDownTests;
