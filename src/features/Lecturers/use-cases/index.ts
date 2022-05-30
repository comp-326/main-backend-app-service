import { TypeMapper } from '@exam-cell-common/utils';
import lecturerRepository from '../repository';
import { makeAddNewLecturerUseCase } from './addLecturerUseCase';
import { makeEditLecturerUseCase } from './editLecturer';
import { makeListLecturerByEmailUseCase } from './listLecturerByEmail';
import { makeListLecturerByIdUseCase } from './listLecturerById';
import { makeListLecturersUseCase } from './listLecturers';
import { makeRemoveLecturerByIdUseCase } from './removeLecturer';

const addNewLecturerUseCase = makeAddNewLecturerUseCase({
	repository: lecturerRepository,
});

const removeLecturerByIdUseCase = makeRemoveLecturerByIdUseCase({
	repository: lecturerRepository,
});

const editLecturerUseCase = makeEditLecturerUseCase({
	repository: lecturerRepository,
});

const listLecturerByIdUseCase = makeListLecturerByIdUseCase({
	repository: lecturerRepository,
});

const listLecturerByEmailUseCase = makeListLecturerByEmailUseCase({
	repository: lecturerRepository,
});

const listLecturersUseCase = makeListLecturersUseCase({
	repository: lecturerRepository,
});

export {
	addNewLecturerUseCase,
	editLecturerUseCase,
	listLecturerByIdUseCase,
	listLecturerByEmailUseCase,
	listLecturersUseCase,
	removeLecturerByIdUseCase,
};

const lecturerUseCases = Object.freeze({
	addNewLecturerUseCase,
	editLecturerUseCase,
	listLecturerByIdUseCase,
	listLecturerByEmailUseCase,
	listLecturersUseCase,
	removeLecturerByIdUseCase,
});

type useCases = typeof lecturerUseCases;

export type lecturerUseCasesType = TypeMapper<useCases>

export default lecturerUseCases;
