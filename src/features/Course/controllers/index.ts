import { TypeMapper } from '@exam-cell-common/utils';
import { makeCreateNewCourseController } from './createNewCourse';
import { makeGetCourseByDepartmentController } from './getCoursesByDepartment';
import { makeGetCourseByIdController } from './getCoursesById';
import { makeGetCourseByNameController } from './getCoursesByName';
import { makeGetCoursesController } from './getCourses';
import { makeUpdateCourseController } from './updateCourse';
import useCase from '../use-cases';

const createNewCourseController = makeCreateNewCourseController({
	useCase,
});
const updateCourseController = makeUpdateCourseController({
	useCase,
});
const getCoursesController = makeGetCoursesController({
	useCase,
});

const getCourseByIdController = makeGetCourseByIdController({
	useCase,
});

const getCourseByDepartmentController = makeGetCourseByDepartmentController({
	useCase,
});

const getCourseByNameController = makeGetCourseByNameController({
	useCase,
});

export {
	createNewCourseController,
	updateCourseController,
	getCoursesController,
	getCourseByIdController,
	getCourseByDepartmentController,
	getCourseByNameController,
};

const courseController = Object.freeze({
	createNewCourseController,
	updateCourseController,
	getCoursesController,
	getCourseByIdController,
	getCourseByDepartmentController,
	getCourseByNameController,
});

type courseType = typeof courseController;

export type courseControllerType = TypeMapper<courseType>[keyof courseType];
