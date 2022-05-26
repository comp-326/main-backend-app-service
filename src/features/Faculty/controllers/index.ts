import { TypeMapper } from '@exam-cell-common/utils';
import { addNewFacultyUseCase } from '../use-cases';
import { makeCreateFacultyController } from './createFaculty';

const createFacultyController = makeCreateFacultyController({ useCase: addNewFacultyUseCase });

export { createFacultyController };

const facultyController = Object.freeze({ createFacultyController });

type controllerType = typeof facultyController

export type FacultyControllerType = TypeMapper<controllerType>[keyof controllerType]

export default facultyController;