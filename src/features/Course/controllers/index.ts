import { TypeMapper } from '@exam-cell-common/utils';
import { addNewCourseUseCase } from '../use-cases';
import { makeCreateNewCourseController } from './createNewCourse';

const createNewCourseController = makeCreateNewCourseController({
	useCase: addNewCourseUseCase,
});

export { createNewCourseController };

const courseController = Object.freeze({ createNewCourseController });

type courseType = typeof courseController;

export type courseControllerType =
  TypeMapper<courseType>[keyof courseType];
