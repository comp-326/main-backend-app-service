import { TypeMapper } from '@exam-cell-common/utils';
import adminRepository from '../repository';
import { makeAddNewDepartmentUseCase } from './addNewDepartment';
import { makeEditDepartmentByIdUseCase } from './editDepartmentById';
import { makeListDepartmentByIdUseCase } from './listDepartmentById';
import { makeListDepartmentByNameUseCase } from './listDepartmentByName';
import { makeListDepartmentsUseCase } from './listDepartments';
import { makeRemoveDepartmentByIdUseCase } from './removeDepartment';

const addNewDepartmentUseCase = makeAddNewDepartmentUseCase({
	repository: adminRepository,
});
const listDepartmentByNameUseCase = makeListDepartmentByNameUseCase({
	repository: adminRepository,
});
const listDepartmentByIdUseCase = makeListDepartmentByIdUseCase({
	repository: adminRepository,
});
const listDepartmentsUseCase = makeListDepartmentsUseCase({
	repository: adminRepository,
});
const removeDepartmentByIdUseCase = makeRemoveDepartmentByIdUseCase({
	repository: adminRepository,
});
const editDepartmentByIdUseCase = makeEditDepartmentByIdUseCase({
	repository: adminRepository,
});

export {
	addNewDepartmentUseCase,
	listDepartmentByNameUseCase,
	listDepartmentByIdUseCase,
	listDepartmentsUseCase,
	removeDepartmentByIdUseCase,
	editDepartmentByIdUseCase,
};

const departmentUseCases = Object.freeze({
	addNewDepartmentUseCase,
	listDepartmentByNameUseCase,
	listDepartmentByIdUseCase,
	listDepartmentsUseCase,
	removeDepartmentByIdUseCase,
	editDepartmentByIdUseCase,
});

type useCases = typeof departmentUseCases;

export type DepartmentUseCasesType = TypeMapper<useCases>

export default departmentUseCases;
