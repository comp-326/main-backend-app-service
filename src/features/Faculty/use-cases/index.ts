import { TypeMapper } from '@exam-cell-common/utils';
import facultyRepository from '../repository';
import { makeAddNewFacultyUseCase } from './addNewFaculty';
import { makeEditFacultyUseCase } from './editFaculty';
import { makeListFacultiesUseCase } from './listFaculties';
import { makeListFacultyByIdUseCase } from './listFacultyById';
import { makeListFacultyByNameUseCase } from './listFacultyByName';
import { makeRemoveFacultyUseCase } from './removeFaculty';

const addNewFacultyUseCase = makeAddNewFacultyUseCase({
	repository: facultyRepository,
});
const editFacultyUseCase = makeEditFacultyUseCase({
	repository: facultyRepository,
});
const listFacultiesUseCase = makeListFacultiesUseCase({
	repository: facultyRepository,
});
const listFacultyByIdUseCase = makeListFacultyByIdUseCase({
	repository: facultyRepository,
});
const listFacultyByNameUseCase = makeListFacultyByNameUseCase({
	repository: facultyRepository,
});
const removeFacultyUseCase = makeRemoveFacultyUseCase({
	repository: facultyRepository,
});

export {
	addNewFacultyUseCase,
	editFacultyUseCase,
	listFacultiesUseCase,
	listFacultyByIdUseCase,
	listFacultyByNameUseCase,
	removeFacultyUseCase,
};

const facultyUseCases = Object.freeze({
	addNewFacultyUseCase,
	editFacultyUseCase,
	listFacultiesUseCase,
	listFacultyByIdUseCase,
	listFacultyByNameUseCase,
	removeFacultyUseCase,
});

type useCases = typeof facultyUseCases;

export type facultyUseCasesType =
	TypeMapper<useCases>// [keyof TypeMapper<useCases>];

export default facultyUseCases;
