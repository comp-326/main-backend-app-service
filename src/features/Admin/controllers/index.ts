import { TypeMapper } from '@exam-cell-common/utils';
import { makeCreateAdminController } from './createAdmin';
import { makeDeleteAdminByIdController } from './deleteAdminById';
import { makeGetAdminByEmailController } from './getAdminByEmail';
import { makeGetAdminsByIdController } from './getAdminById';
import { makeGetAdminsController } from './getAdmins';
import { makeUpdateAdminController } from './updateAdmin';
import useCase from '../use-cases';

const createAdminController = makeCreateAdminController({
	useCase,
});

const deleteAdminByIdController = makeDeleteAdminByIdController({
	useCase,
});

const getAdminByEmailController = makeGetAdminByEmailController({
	useCase,
});

const getAdminByIdController = makeGetAdminsByIdController({
	useCase,
});

const getAdminsController = makeGetAdminsController({
	useCase,
});

const updateAdminController = makeUpdateAdminController({
	useCase,
});

export {
	createAdminController,
	deleteAdminByIdController,
	getAdminByEmailController,
	getAdminByIdController,
	getAdminsController,
	updateAdminController,
};

const adminController = Object.freeze({
	createAdminController,
	deleteAdminByIdController,
	getAdminByEmailController,
	getAdminByIdController,
	getAdminsController,
	updateAdminController,
});

type controllerType = typeof adminController;

export default adminController;

export type adminControllerType =
	TypeMapper<controllerType>[keyof controllerType];
