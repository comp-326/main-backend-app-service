import { TypeMapper } from '@exam-cell-common/utils';
import courseRepository from './../repository';
import { makeAddNewCourseUseCase } from './addNewCourse';
import { makeEditCourseUseCase } from './editCourse';
import { makeListCourseByDepartmentUseCase } from './listCoursesByDepartment';
import { makeListCourseByIdUseCase } from './listCoursesById';
import { makeListCourseByNameUseCase } from './listCourseByName';
import { makeListCoursesUseCase } from './listCourses';
import { makeRemoveCourseUseCase } from './removeCourse';

const addNewCourseUseCase = makeAddNewCourseUseCase({
	repository: courseRepository,
});
const editCourseUseCase = makeEditCourseUseCase({
	repository: courseRepository,
});
const listCoursesUseCase = makeListCoursesUseCase({
	repository: courseRepository,
});
const listCourseByIdUseCase = makeListCourseByIdUseCase({
	repository: courseRepository,
});
const listCourseByNameUseCase = makeListCourseByNameUseCase({
	repository: courseRepository,
});
const listCourseByDepartmentUseCase = makeListCourseByDepartmentUseCase({
	repository: courseRepository,
});
const removeCourseUseCase = makeRemoveCourseUseCase({
	repository: courseRepository,
});

export {
	addNewCourseUseCase,
	editCourseUseCase,
	listCoursesUseCase,
	listCourseByIdUseCase,
	listCourseByNameUseCase,
	listCourseByDepartmentUseCase,
	removeCourseUseCase,
};

const courseUseCases = Object.freeze({
	addNewCourseUseCase,
	editCourseUseCase,
	listCoursesUseCase,
	listCourseByIdUseCase,
	listCourseByNameUseCase,
	listCourseByDepartmentUseCase,
	removeCourseUseCase,
});

type useCases = typeof courseUseCases;

export type courseUseCasesType = TypeMapper<useCases>;

export default courseUseCases;
