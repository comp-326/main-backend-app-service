import { TypeMapper } from '@exam-cell-common/utils';
import { addNewAdminUseCase } from '../use-cases';
import { makeCreateStudentController } from './createStudent';

const createStudentController = makeCreateStudentController({ useCase: addNewAdminUseCase });

export { createStudentController };

const studentController = Object.freeze({ createStudentController });

type controllerType = typeof studentController

export default studentController;

export type studentControllerType = TypeMapper<controllerType>[keyof controllerType];