import { TypeMapper } from '@exam-cell-common/utils';
import adminRepository from '../repository';
import { makeAddNewAdminUseCase } from './addAdmin';
import { makeEditAdminUseCase } from './editAdmin';
import { makeListAdminByEmailUseCase } from './listAdminByEmail';
import { makeListAdminByIdUseCase } from './listAdminById';
import { makeListAdminsUseCase } from './listAdmins';
import { makeRemoveAdminByIdUseCase } from './removeAdmin';

const addNewAdminUseCase = makeAddNewAdminUseCase({
	repository: adminRepository,
});

const removeAdminByIdUseCase = makeRemoveAdminByIdUseCase({
	repository: adminRepository,
});

const editAdminUseCase = makeEditAdminUseCase({
	repository: adminRepository,
});

const listAdminByIdUseCase = makeListAdminByIdUseCase({
	repository: adminRepository,
});

const listAdminByEmailUseCase = makeListAdminByEmailUseCase({
	repository: adminRepository,
});

const listAdminsUseCase = makeListAdminsUseCase({
	repository: adminRepository,
});

export {
	addNewAdminUseCase,
	editAdminUseCase,
	listAdminByIdUseCase,
	listAdminByEmailUseCase,
	listAdminsUseCase,
	removeAdminByIdUseCase,
};

const adminUseCases = Object.freeze({
	addNewAdminUseCase,
	editAdminUseCase,
	listAdminByIdUseCase,
	listAdminByEmailUseCase,
	listAdminsUseCase,
	removeAdminByIdUseCase,
});

type useCases = typeof adminUseCases;

export type adminUseCasesType = TypeMapper<useCases>

export default adminUseCases;
