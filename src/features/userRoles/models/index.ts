/* eslint-disable @typescript-eslint/no-explicit-any */
import Permissions from '@exam-cell-constants/userPermissions';
import mongoose from '@exam-cell-db/mongodb';
import { IUserRoleDocument, IUserRoleDocumentModel } from './interfaces';

const userRoleSchema: mongoose.Schema<IUserRoleDocument> = new mongoose.Schema({
	default: {
		type: Boolean,
	},
	name: {
		type: String,
		required: true,
		unique: true
	},
	permissions: {
		type: Number,
		required: true,
		min: 0
	},

}, {
	timestamps: true
});


userRoleSchema.methods.hasPermission = function (permission: number) {
	const permitted = (this.permissions & permission) === permission;

	return permitted;
};

userRoleSchema.methods.addPermission = function (permission: number) {
	if (!this.hasPermission(permission))
		this.permissions += permission;

};
userRoleSchema.methods.removePermission = function (permission: number) {
	if (this.hasPermission(permission))
		this.permissions -= permission;

};

userRoleSchema.methods.resetPermission = function () {
	this.permissions = 0;
};

userRoleSchema.statics.getDefaultRole = async function () {
	const defaultRole = await userRoleModel.findOne({ default: true });

	return defaultRole;
};

userRoleSchema.statics.InsertRoles = async function () {
	const roles: { [key: string]: number[] } = {
		['student']: [
			Permissions.STUDENT
		],
		['lecturer']: [
			Permissions.LECTURER
		],
		['moderator']:[
			Permissions.STUDENT,
			Permissions.LECTURER,
			Permissions.MODERATOR
		],
		['administrator']: [
			Permissions.STUDENT,
			Permissions.LECTURER,
			Permissions.MODERATOR,
			Permissions.ADMIN
		]
	};
	const defaultRole = 'student';
	Object.keys(roles).forEach(async (r) => {
		let role = await userRoleModel.findOne({ name: r });
		if (!role)
			role = new userRoleModel({ name: r });

		role.resetPermission();
		for (const perm of roles[r])
			role.addPermission(perm);

		role.default = role.name === defaultRole;
		await role.save();
	});
};
const userRoleModel = mongoose.model<IUserRoleDocument, IUserRoleDocumentModel>('UserRoles', userRoleSchema);

export default userRoleModel;