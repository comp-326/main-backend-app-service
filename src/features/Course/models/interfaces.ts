/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';

export interface ICourse {
	name: string;
	faculty: any;
	department: any;
	code: string;
}

export interface ICourseDocument extends ICourse, mongoose.Document {
	_doc: any;
}

export interface ICourseDocumentModel
	extends mongoose.Model<ICourseDocument> {
	findByName: (name: string) => Promise<ICourseDocument>;
}
