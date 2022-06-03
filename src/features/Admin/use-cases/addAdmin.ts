import { AdminRepositoryType } from '../repository';
import AppEvents from '@exam-cell-constants/events';
import { IAdmin } from '@exam-cell-features/Admin/models/interfaces';
import { Publisher } from '@exam-cell-RedisBaseClient';
import adminModel from '@exam-cell-features/Admin/models';
import createAdminEntity from '../entities';
import moment from 'moment';

export function makeAddNewAdminUseCase({
	repository,
}: {
	repository: AdminRepositoryType;
}) {
	return async (adminData: IAdmin) => {
		const { getEmail, getPassword, getRole, getFirstName, getLastName } =
			await createAdminEntity(adminData);
		const saved = await repository.createNewAdmin({
			model: adminModel,
		})({
			email: getEmail(),
			password: getPassword(),
			role: getRole(),
			firstName: getFirstName(),
			lastName: getLastName(),
		});
		Publisher.publish(
			AppEvents.NEW_ACCOUNT,
			JSON.stringify({
				firstName: getFirstName(),
				lastName: getLastName(),
				email: getEmail(),
				password: adminData.password,
				date: moment().format('LLLL'),
				subject: 'New Account',
			}),
		);

		return saved;
	};
}
