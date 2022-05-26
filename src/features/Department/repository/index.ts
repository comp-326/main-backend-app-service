import { createNewDepartment } from './createDepartment';

export { createNewDepartment };

const departmentRepository = Object.freeze({
	createNewDepartment,
});

export type departmentRepositoryType = typeof departmentRepository;
