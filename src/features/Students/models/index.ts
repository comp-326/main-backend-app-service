/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';
import { IStudentDocument, IStudentDocumentModel } from './interfaces';

const studentSchema: mongoose.Schema<IStudentDocument> = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	department: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: 'Department',
	},
	password: {
		type: String,
		required: true,
		minLength: 8,
	},
	course: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: 'Course',
	},
	role: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: 'Role',
	},
});

studentSchema.statics.findByEmail = async function (email: string) {
	const student = await this.findOne({ email }).select('+password');

	return student;
};
const studentModel = mongoose.model<IStudentDocument, IStudentDocumentModel>(
	'Students',
	studentSchema
);

export type StudentModelType = typeof studentModel;

export default studentModel;
