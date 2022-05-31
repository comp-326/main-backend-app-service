import { createNewFaculty } from './createFaculty';
import { deleteFacultyById } from './deleteFacultyById';
import { findAllFaculties } from './findAllFaculties';
import { findFacultyById } from './findFacultyById';
import { findFacultyByName } from './findFacultyByName';
import { updateFacultyById } from './updateFacultyById';

export {
	createNewFaculty,
	deleteFacultyById,
	findAllFaculties,
	updateFacultyById,
	findFacultyById,
	findFacultyByName,
};

const facultyRepository = Object.freeze({
	createNewFaculty,
	deleteFacultyById,
	findAllFaculties,
	findFacultyById,
	findFacultyByName,
	updateFacultyById,
});

export type FacultyRepositoryType = typeof facultyRepository;

export default facultyRepository;
