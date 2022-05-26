/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';
import { IUserDocument, IUserDocumentModel } from './interfaces';

const userSchema: mongoose.Schema<IUserDocument> = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true
	},
	lastName: {
		type: String,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		index: true,
		trim: true
	},
	bio: {
		type: String,
		default: '',
		trim: true
	},
	password: {
		type: String,
		minlength: 8,
		required: true,
		select: false
	},
	isActive: {
		type: Boolean,
		default: false,

	},
	gender: {
		type: String,
		enum: ['male', 'female', 'other', 'rather not say'],
		default: 'rather not say',
	},
	isDeleted: {
		type: Boolean,
		default: false,
		select: false
	},
	role: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: 'UserRoles'
	},
	profilePicture: {
		type: mongoose.SchemaTypes.ObjectId,
		required: false,
		ref: 'Media',
		default: ''
	}

});

userSchema.statics.findByEmail = async function(email: string){
	const user = await userModel.findOne({ email }).select('+password');

	return user;
};
const userModel = mongoose.model<IUserDocument, IUserDocumentModel>('Users', userSchema);

export type UserModelType = typeof userModel

export default userModel;