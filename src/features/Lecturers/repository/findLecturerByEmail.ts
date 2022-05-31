import { LecturerModelType } from '../models';

export function findLecturerByEmail({ model }: { model: LecturerModelType }) {
	return async (email: string) => {
		const entity = await model.findOne({ email });

		return entity;
	};
}
