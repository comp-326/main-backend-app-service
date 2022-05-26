import { createNewCourse } from './createCourse';

export { createNewCourse };

const courseRepository = Object.freeze({
	createNewCourse,
});

export type courseRepositoryType = typeof courseRepository;

export default courseRepository;