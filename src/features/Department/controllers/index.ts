import { TypeMapper } from '@exam-cell-common/utils';
import { addNewDepartmentUseCase } from '../use-cases';
import { makeCreateNewDepartmentController } from './createNewDepartment';

const createNewDepartmentController = makeCreateNewDepartmentController({
	useCase: addNewDepartmentUseCase,
});

export { createNewDepartmentController };

const departmentController = Object.freeze({ createNewDepartmentController });

type departmentType = typeof departmentController;

export type departmentControllerType =
  TypeMapper<departmentType>[keyof departmentType];
