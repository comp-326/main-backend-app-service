import { UserModelType } from '@exam-cell-features/Users/models';


type Props = {
    limit: number
    page: number
}

export function findAllStudents({ model }: { model: UserModelType }) {
	return async ({ limit, page }: Props) => {
		const admins = await model.find({ role: { name: 'students' } }).limit(limit).skip(limit * (page - 1)).populate('role');

		return admins;
	};
}