import { TypeMapper } from '@exam-cell-common/utils';
import { makeCreateLecturerController } from './createLecturer';
import { makeDeleteLecturerByIdController } from './deleteLecturerById';
import { makeGetLecturerByEmailController } from './getLecturerByEmail';
import { makeGetLecturersByIdController } from './getLecturerById';
import { makeGetLecturersController } from './getLecturers';
import { makeUpdateLecturerController } from './updateLecturer';
import useCase from '../use-cases';

const createLecturerController = makeCreateLecturerController({
	useCase,
});

const deleteLecturerByIdController = makeDeleteLecturerByIdController({
	useCase,
});

const getLecturerByEmailController = makeGetLecturerByEmailController({
	useCase,
});

const getLecturerByIdController = makeGetLecturersByIdController({
	useCase,
});

const getLecturersController = makeGetLecturersController({
	useCase,
});

const updateLecturerController = makeUpdateLecturerController({
	useCase,
});

export {
	createLecturerController,
	deleteLecturerByIdController,
	getLecturerByEmailController,
	getLecturerByIdController,
	getLecturersController,
	updateLecturerController,
};

const lecturerController = Object.freeze({
	createLecturerController,
	deleteLecturerByIdController,
	getLecturerByEmailController,
	getLecturerByIdController,
	getLecturersController,
	updateLecturerController,
});

type controllerType = typeof lecturerController;

export default lecturerController;

export type lecturerControllerType =
	TypeMapper<controllerType>[keyof controllerType];
