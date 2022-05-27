/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';
import { ILecturerDocument, ILecturerDocumentModel } from './interfaces';

const lecturerSchema: mongoose.Schema<ILecturerDocument> = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 8,
	},

	role: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: 'Role',
	},
});

lecturerSchema.statics.findByEmail = async function (email: string) {
	const lecturer = await this.findOne({ email }).select('+password');

	return lecturer;
};
const lecturerModel = mongoose.model<ILecturerDocument, ILecturerDocumentModel>(
	'Lecturers',
	lecturerSchema
);

export type LecturerModelType = typeof lecturerModel;

export default lecturerModel;
