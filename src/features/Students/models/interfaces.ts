/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGender } from '@exam-cell-common/types';
import mongoose from '@exam-cell-db/mongodb';

export interface IStudent {
	firstName: string;
	lastName: string;
	course: any;
	email: string;
	department: any;
	gender: IGender;
	password: string;
	role:any
}

export interface IStudentDocument extends IStudent, mongoose.Document {
	_doc: any;
}

export interface IStudentDocumentModel
	extends mongoose.Model<IStudentDocument> {
	findByEmail: (email: string) => Promise<IStudentDocument>;
}
