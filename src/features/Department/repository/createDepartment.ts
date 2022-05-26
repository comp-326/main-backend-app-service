import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyModelType } from '@exam-cell-features/Faculty/models';
import { IDepartment } from './../models/interfaces';
import { departmentModelType } from '../models';

type Props = {
  departmentModel: departmentModelType;
  facultyModel: FacultyModelType;
};

export function createNewDepartment({ departmentModel, facultyModel }: Props) {
	return async (adminData: IDepartment) => {
		const faculty = await facultyModel.findById(adminData.faculty);
		if (!faculty) {
			throw new ExpressError({
				message: 'Department faculty is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}

		const department = await departmentModel.create({
			...adminData,
			faculty: faculty._id,
		});

		return department;
	};
}
