import { IUserRepository } from '../interfaces';

export function makeHardRemoveUser({ repository }: { repository: IUserRepository }) {
	return async (id: string) => {
		const user = await repository.deleteById(id);

		return user;
	};
}