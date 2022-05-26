import { createNewFaculty } from './createFaculty';

export {createNewFaculty};

const facultyRepository = Object.freeze({createNewFaculty});

export type FacultyRepositoryType = typeof facultyRepository

export default facultyRepository;