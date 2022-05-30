import { createNewLecturer } from './createLecturer';
import { deleteLecturerById } from './deleteLecturerById';
import { findAllLecturers } from './findAllLecturers';
import { findLecturerByEmail } from './findLecturerByEmail';
import { findLecturerById } from './findLecturerById';
import { updateLecturerById } from './updateLecturerById';

export {
	createNewLecturer,
	findAllLecturers,
	findLecturerById,
	updateLecturerById,
	findLecturerByEmail,
	deleteLecturerById,
};

const lecturerRepository = Object.freeze({
	createNewLecturer,
	findAllLecturers,
	findLecturerById,
	updateLecturerById,
	findLecturerByEmail,
	deleteLecturerById,
});

export type LecturerRepositoryType = typeof lecturerRepository;

export default lecturerRepository;
