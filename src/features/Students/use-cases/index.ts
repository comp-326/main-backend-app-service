import { TypeMapper } from '@exam-cell-common/utils';
import adminRepository from '../repository';
import { makeAddNewStudentUseCase } from './addStudent';
import { makeEditStudentByIdUseCase } from './editStudentById';
import { makeListStudentByEmailUseCase } from './listStudentByEmail';
import { makeListStudentByIdUseCase } from './listStudentById';
import { makeListStudentsUseCase } from './listStudents';
import { makeRemoveStudentByIdUseCase } from './removeStudent';

const addNewStudentUseCase = makeAddNewStudentUseCase({
	repository: adminRepository,
});
const listStudentByEmailUseCase = makeListStudentByEmailUseCase({
	repository: adminRepository,
});
const listStudentByIdUseCase = makeListStudentByIdUseCase({
	repository: adminRepository,
});
const listStudentsUseCase = makeListStudentsUseCase({
	repository: adminRepository,
});
const removeStudentByIdUseCase = makeRemoveStudentByIdUseCase({
	repository: adminRepository,
});
const editStudentByIdUseCase = makeEditStudentByIdUseCase({
	repository: adminRepository,
});

export {
	addNewStudentUseCase,
	listStudentByEmailUseCase,
	listStudentByIdUseCase,
	listStudentsUseCase,
	removeStudentByIdUseCase,
	editStudentByIdUseCase,
};

const studentUseCases = Object.freeze({
	addNewStudentUseCase,
	listStudentByEmailUseCase,
	listStudentByIdUseCase,
	listStudentsUseCase,
	removeStudentByIdUseCase,
	editStudentByIdUseCase,
});

type useCases = typeof studentUseCases;

export type StudentUseCasesType = TypeMapper<useCases>

export default studentUseCases;
