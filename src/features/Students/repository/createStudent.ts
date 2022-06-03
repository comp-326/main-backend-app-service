import { IStudent } from './../models/interfaces';
import { StudentModelType } from '../models';
import userRoleModel from '@exam-cell-features/userRoles/models';

export function createNewStudent({ model }: { model: StudentModelType }) {
	return async (studentData: IStudent) => {
		const roles = await userRoleModel.find();
		if (roles.length < 1) await userRoleModel.InsertRoles();
		const role = await userRoleModel.findOne({ name: 'student' });
		const student = await model.create({studentData,role});

		return student;
	};
}