import { AdminRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IAdmin } from '@exam-cell-features/Admin/models/interfaces';
import adminModel from '@exam-cell-features/Admin/models';
import createAdminEntity from '../entities';
import moment from 'moment';
import { subscribeToNewAccountMailer } from '@exam-cell-services/resources/mail/subscribeToMailer';

export function makeAddNewAdminUseCase({
	repository,
}: {
	repository: AdminRepositoryType;
}) {
	return async (adminData: IAdmin) => {
		const { getEmail, getPassword, getRole, getFirstName, getLastName } =
			await createAdminEntity(adminData);
		const existing = await repository.findAdminByEmail({
			model: adminModel,
		})(getEmail());
		if (existing) {
			throw new ExpressError({
				message: 'Email already registered',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const saved = await repository.createNewAdmin({
			model: adminModel,
		})({
			email: getEmail(),
			password: getPassword(),
			role: getRole(),
			firstName: getFirstName(),
			lastName: getLastName(),
		});
		subscribeToNewAccountMailer({
			email: getEmail(),
			firstName: getFirstName(),
			lastName: getLastName(),
			password: adminData.password,
			subject: 'Account Activation',
			time: moment().format('LLLL'),
		});

		return saved;
	};
}
