import { createNewStudent } from './createStudent';
import { findAllStudents } from './findAll';

export { createNewStudent, findAllStudents };

const studentRepository = Object.freeze({ createNewStudent, findAllStudents });

export type StudentRepositoryType = typeof studentRepository;

export default studentRepository;
