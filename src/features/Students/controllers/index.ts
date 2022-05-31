import { TypeMapper } from '@exam-cell-common/utils';
import { makeCreateStudentController } from './createStudent';
import { makeDeleteStudentByIdController } from './deleteStudentById';
import { makeFindStudentByEmailController } from './findStudentByEmail';
import { makeFindStudentByIdController } from './findStudentById';
import { makeFindStudentsController } from './findStudents';
import { makeUpdateStudentByIdController } from './updateStudentById';
import useCase from '../use-cases';

const createStudentController = makeCreateStudentController({
	useCase,
});
const deleteStudentByIdController = makeDeleteStudentByIdController({
	useCase,
});
const findStudentByEmailController = makeFindStudentByEmailController({
	useCase,
});
const findStudentByIdController = makeFindStudentByIdController({
	useCase,
});

const findStudentsController = makeFindStudentsController({
	useCase,
});
const updateStudentByIdController = makeUpdateStudentByIdController({
	useCase,
});

export {
	createStudentController,
	deleteStudentByIdController,
	findStudentByEmailController,
	findStudentByIdController,
	findStudentsController,
	updateStudentByIdController,
};

const studentController = Object.freeze({
	createStudentController,
	deleteStudentByIdController,
	findStudentByEmailController,
	findStudentByIdController,
	findStudentsController,
	updateStudentByIdController,
});

type controllerType = typeof studentController;

export default studentController;

export type studentControllerType =
	TypeMapper<controllerType>[keyof controllerType];
