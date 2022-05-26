import { TypeMapper } from '@exam-cell-common/utils';
import courseRepository from './../repository';
import { makeAddNewCourseUseCase } from './addNewCourse';

const addNewCourseUseCase = makeAddNewCourseUseCase({
	repository: courseRepository,
});

export { addNewCourseUseCase };

const courseUseCases = Object.freeze({ addNewCourseUseCase });

type useCases = typeof courseUseCases;

export type courseUseCasesType = TypeMapper<useCases>[keyof useCases];

export default courseUseCases;
