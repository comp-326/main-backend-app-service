import mongoose from '@exam-cell-db/mongodb';
import { IFacultyDocument, IFacultyDocumentModel } from './interfaces';

const facultySchema: mongoose.Schema<IFacultyDocument> = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true
	}
}, { timestamps: true });


facultySchema.statics.findByName = async function (name: string): Promise<IFacultyDocument | null> {
	return await this.findOne({ name });
};

const facultyModel = mongoose.model<IFacultyDocument, IFacultyDocumentModel>('Faculty', facultySchema);


export default facultyModel;

export type FacultyModelType = typeof facultyModel