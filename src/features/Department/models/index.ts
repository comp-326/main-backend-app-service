import mongoose from '@exam-cell-db/mongodb';
import { IDepartmentDocument, IDepartmentDocumentModel } from './interfaces';

const departmentSchema: mongoose.Schema<IDepartmentDocument> = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	faculty: {
		type: mongoose.SchemaTypes.ObjectId,
		required: [true, 'Department faculty required'],
		ref: 'Faculty'
	}
}, { timestamps: true });

departmentSchema.statics.findByName = async function (name: string) {
	return await this.findOne({ name });
};

const departmentModel = mongoose.model<IDepartmentDocument, IDepartmentDocumentModel>('Department', departmentSchema);

export default departmentModel;

export type departmentModelType = typeof departmentModel