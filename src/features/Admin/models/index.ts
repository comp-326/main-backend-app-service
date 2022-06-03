/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';
import { IAdminDocument, IAdminDocumentModel } from './interfaces';

const adminSchema: mongoose.Schema<IAdminDocument> = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		index: true,
		trim: true,
	},

	password: {
		type: String,
		minlength: 8,
		required: true,
		select: false,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	role: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: 'UserRoles',
	},
});

adminSchema.statics.findByEmail = async function (email: string) {
	const admin = await adminModel.findOne({ email }).select('+password');

	return admin;
};
const adminModel = mongoose.model<IAdminDocument, IAdminDocumentModel>(
	'Admin',
	adminSchema
);

export type AdminModelType = typeof adminModel;

export default adminModel;
