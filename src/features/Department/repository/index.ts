import { createNewDepartment } from './createDepartment';
import { deleteDepartment } from './deleteDepartment';
import { findAllDepartments } from './findAllDepartments';
import { findDepartmentById } from './findDepartmentById';
import { findDepartmentByName } from './findDepartmentByName';
import { updateDepartmentById } from './updateDepartmentById';

export {
	createNewDepartment,
	findAllDepartments,
	findDepartmentByName,
	findDepartmentById,
	deleteDepartment,
	updateDepartmentById,
};

const studentRepository = Object.freeze({
	createNewDepartment,
	findAllDepartments,
	findDepartmentByName,
	findDepartmentById,
	updateDepartmentById,
	deleteDepartment,
});

export type DepartmentRepositoryType = typeof studentRepository;

export default studentRepository;
