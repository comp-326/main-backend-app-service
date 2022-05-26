import { TypeMapper } from '@exam-cell-common/utils';
import { addNewLecturerUseCase } from '../use-cases';
import { makeCreateLecturerController } from './createLecturer';

const createLecturerController = makeCreateLecturerController({ useCase: addNewLecturerUseCase });

export { createLecturerController };

const lecturerController = Object.freeze({ createLecturerController });

type controllerType = typeof lecturerController

export default lecturerController;

export type lecturerControllerType = TypeMapper<controllerType>[keyof controllerType];