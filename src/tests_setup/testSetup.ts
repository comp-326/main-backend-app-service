import { MockMongoose } from 'mock-mongoose';
import mongoose from '@exam-cell-db/mongodb';

const mockMongoose: MockMongoose = new MockMongoose(mongoose);
const tearDownTests = async () => {
	beforeAll(async () => {
		mockMongoose.prepareStorage().then(() => {
			mongoose.connect('mongodb://localhost/examcell-test');
		});
	});
};

export default tearDownTests;
