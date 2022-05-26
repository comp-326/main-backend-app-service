import { TypeMapper } from '@exam-cell-common/utils';
import departmentRepository from './../repository';
import { makeAddNewDepartmentUseCase } from './addNewDepartment';

const addNewDepartmentUseCase = makeAddNewDepartmentUseCase({
	repository: departmentRepository,
});

export { addNewDepartmentUseCase };

const departmentUseCases = Object.freeze({ addNewDepartmentUseCase });

type useCases = typeof departmentUseCases;

export type departmentUseCasesType = TypeMapper<useCases>[keyof useCases];

export default departmentUseCases;
