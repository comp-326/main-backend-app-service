import { IUser } from '@exam-cell-features/Users/models/interfaces';
import { UserModelType } from '@exam-cell-features/Users/models';

export function createNewStudent({ model }: { model: UserModelType }) {
	return async (studentData: IUser) => {
		const student = await model.create(studentData);

		return student;
	};
}