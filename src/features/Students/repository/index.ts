import { createNewStudent } from './createStudent';
import { deleteStudent } from './deleteStudent';
import { findAllStudents } from './findAllStudents';
import { findStudentByEmail } from './findStudentByEmail';
import { findStudentById } from './findStudentById';
import { updateStudentById } from './updateStudentById';

export {
	createNewStudent,
	findAllStudents,
	findStudentByEmail,
	findStudentById,
	deleteStudent,
	updateStudentById,
};

const studentRepository = Object.freeze({
	createNewStudent,
	findAllStudents,
	findStudentByEmail,
	findStudentById,
	deleteStudent,
	updateStudentById,
});

export type StudentRepositoryType = typeof studentRepository;

export default studentRepository;
