import { UserModelType } from '@exam-cell-features/Users/models';


type Props = {
    limit: number
    page: number
}

export function findAllLecturers({ model }: { model: UserModelType }) {
	return async ({ limit, page }: Props) => {
		const admins = await model.find({ role: { name: 'lecturer' } }).limit(limit).skip(limit * (page - 1)).populate('role');

		return admins;
	};
}