import { createNewCourse } from './createCourse';
import { deleteCourseById } from './deleteCourse';
import { findAllCourses } from './findAllCourses';
import { findCourseByDepartment } from './findByCourseDepartment';
import { findCourseById } from './findCourseById';
import { findCourseByName } from './findCourseByName';
import { updateCourseById } from './updateCourseById';

export {
	createNewCourse,
	deleteCourseById,
	findAllCourses,
	findCourseByDepartment,
	findCourseById,
	findCourseByName,
	updateCourseById,
};

const courseRepository = Object.freeze({
	createNewCourse,
	deleteCourseById,
	findAllCourses,
	findCourseByDepartment,
	findCourseById,
	findCourseByName,
	updateCourseById,
});

export type courseRepositoryType = typeof courseRepository;

export default courseRepository;
