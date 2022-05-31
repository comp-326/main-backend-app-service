import { AdminModelType } from '../models';

export function deleteAdminById({ model }: { model: AdminModelType }) {
	return async (lecturerId: string) => {
		const admin = await model.findByIdAndUpdate(lecturerId, {
			$set: {
				isDeleted: true,
			},
		});

		return admin;
	};
}
