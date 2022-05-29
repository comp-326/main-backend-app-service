/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';

export interface IUnit {
	name: string;
	faculty: any;
	department: any;
	unitCode: string;
	semester: number;
	year: number;
}

export interface IUnitDocument extends IUnit, mongoose.Document {
	_doc: any;
}

export interface IUnitDocumentModel extends mongoose.Model<IUnitDocument> {
	findByName: (name: string) => Promise<IUnitDocument>;
	findBycode: (code: string) => Promise<IUnitDocument>;
}
