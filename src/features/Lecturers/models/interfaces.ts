/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGender } from '@exam-cell-common/types';
import mongoose from '@exam-cell-db/mongodb';

export interface ILecturer {
	firstName: string;
	lastName: string;
	email: string;
	gender: IGender;
	password: string;
	role: any;
}

export interface ILecturerDocument extends ILecturer, mongoose.Document {
	_doc: any;
}

export interface ILecturerDocumentModel
	extends mongoose.Model<ILecturerDocument> {
	findByEmail: (email: string) => Promise<ILecturerDocument>;
}
