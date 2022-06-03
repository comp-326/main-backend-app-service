/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';

export interface IAdmin {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: any;
}

export interface IAdminDocument extends IAdmin, mongoose.Document {
	_doc: any;
}

export interface IAdminDocumentModel extends mongoose.Model<IAdminDocument> {
	findByEmail: (email: string) => Promise<IAdminDocument>;
}
