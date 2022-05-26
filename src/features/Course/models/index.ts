import mongoose from '@exam-cell-db/mongodb';
import { ICourseDocument, ICourseDocumentModel } from './interfaces';

const courseSchema: mongoose.Schema<ICourseDocument> = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		faculty: {
			type: mongoose.SchemaTypes.ObjectId,
			required: [true, 'Course faculty required'],
			ref: 'Faculty',
		},
		department: {
			type: mongoose.SchemaTypes.ObjectId,
			required: [true, 'Course department required'],
			ref: 'Department',
		},
		code: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

courseSchema.statics.findByName = async function (name: string) {
	return await this.findOne({ name });
};

const courseModel = mongoose.model<ICourseDocument, ICourseDocumentModel>(
	'Course',
	courseSchema
);

export default courseModel;

export type courseModelType = typeof courseModel;
