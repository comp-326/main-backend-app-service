import { TypeMapper } from '@exam-cell-common/utils';
import { makeCreateDepartmentController } from './createDepartment';
import { makeDeleteDepartmentByIdController } from './deleteDepartmentById';
import { makeFindDepartmentByIdController } from './findDepartmentById';
import { makeFindDepartmentByNameController } from './findDepartmentByName';
import { makeFindDepartmentsController } from './findDepartments';
import { makeUpdateDepartmentByIdController } from './updateDepartmentById';
import useCase from '../use-cases';

const createDepartmentController = makeCreateDepartmentController({
	useCase,
});
const deleteDepartmentByIdController = makeDeleteDepartmentByIdController({
	useCase,
});
const findDepartmentByNameController = makeFindDepartmentByNameController({
	useCase,
});
const findDepartmentByIdController = makeFindDepartmentByIdController({
	useCase,
});

const findDepartmentsController = makeFindDepartmentsController({
	useCase,
});
const updateDepartmentByIdController = makeUpdateDepartmentByIdController({
	useCase,
});

export {
	createDepartmentController,
	deleteDepartmentByIdController,
	findDepartmentByNameController,
	findDepartmentByIdController,
	findDepartmentsController,
	updateDepartmentByIdController,
};

const departmentController = Object.freeze({
	createDepartmentController,
	deleteDepartmentByIdController,
	findDepartmentByNameController,
	findDepartmentByIdController,
	findDepartmentsController,
	updateDepartmentByIdController,
});

type controllerType = typeof departmentController;

export default departmentController;

export type departmentControllerType =
	TypeMapper<controllerType>[keyof controllerType];
