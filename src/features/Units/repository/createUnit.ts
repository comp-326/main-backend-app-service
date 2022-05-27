import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyModelType } from '@exam-cell-features/Faculty/models';
import { IUnit } from './../models/interfaces';
import { departmentModelType } from '@exam-cell-features/Department/models';
import { unitModelType } from '../models';

type Props = {
  unitModel: unitModelType;
  facultyModel: FacultyModelType;
  departmentModel:departmentModelType
};

export function createNewUnit({ unitModel, facultyModel }: Props) {
	return async (adminData: IUnit) => {
		const faculty = await facultyModel.findById(adminData.faculty);
		if (!faculty) {
			throw new ExpressError({
				message: 'Unit faculty is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}

		const unit = await unitModel.create({
			...adminData,
			faculty: faculty._id,
		});

		return unit;
	};
}
