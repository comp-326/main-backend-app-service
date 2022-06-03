import { ILecturer } from './../models/interfaces';
import { LecturerModelType } from '../models';
import userRoleModel from '@exam-cell-features/userRoles/models';

export function createNewLecturer({ model }: { model: LecturerModelType }) {
	return async (lecturerData: ILecturer) => {
		const roles = await userRoleModel.find();
		if (roles.length < 1) await userRoleModel.InsertRoles();
		const role = await userRoleModel.findOne({ name: 'lecturer' });
		
		const lecturer = await model.create({ ...lecturerData, role });

		return lecturer;
	};
}
