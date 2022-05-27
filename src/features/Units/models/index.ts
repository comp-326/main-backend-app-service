import mongoose from '@exam-cell-db/mongodb';
import { IUnitDocument, IUnitDocumentModel } from './interfaces';

const unitSchema: mongoose.Schema<IUnitDocument> = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	faculty: {
		type: mongoose.SchemaTypes.ObjectId,
		required: [true, 'Unit faculty required'],
		ref: 'Faculty'
	},
	department: {
		type: mongoose.SchemaTypes.ObjectId,
		required: [true, 'Unit Department required'],
		ref: 'Department'
	},
	unitCode: {
		type: String,
		required: true,
		unique: true
	}
}, { timestamps: true });

unitSchema.statics.findByName = async function (name: string) {
	return await this.findOne({ name });
};
unitSchema.statics.findByCode = async function (code: string) {
	return await this.findOne({ unitCode:code });
};

const unitModel = mongoose.model<IUnitDocument, IUnitDocumentModel>('Unit', unitSchema);

export default unitModel;

export type unitModelType = typeof unitModel