import { createNewLecturer } from './createLecturer';
import { findAllLecturers } from './findAll';

export { createNewLecturer,findAllLecturers };

const lecturerRepository = Object.freeze({ createNewLecturer ,findAllLecturers});

export type LecturerRepositoryType = typeof lecturerRepository

export default lecturerRepository;