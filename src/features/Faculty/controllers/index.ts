import { TypeMapper } from '@exam-cell-common/utils';
import { makeCreateFacultyController } from './createFaculty';
import { makeGetFacultiesController } from './getFaculties';
import { makeGetFacultyByIdController } from './getFacultyById';
import { makeGetFacultyByNameController } from './getFacultyByName';
import { makeUpdateFacultyController } from './updateFaculty';

import useCase from './../use-cases';

const createFacultyController = makeCreateFacultyController({ useCase });
const listFacultiesController = makeGetFacultiesController({ useCase });
const listFacultyByIdController = makeGetFacultyByIdController({ useCase });
const editFacultyController = makeUpdateFacultyController({ useCase });
const listFacultyByNameController = makeGetFacultyByNameController({
	useCase,
});

export {
	createFacultyController,
	editFacultyController,
	listFacultiesController,
	listFacultyByIdController,
	listFacultyByNameController,
};

const facultyController = Object.freeze({
	createFacultyController,
	editFacultyController,
	listFacultiesController,
	listFacultyByIdController,
	listFacultyByNameController,
});

type controllerType = typeof facultyController;

export type FacultyControllerType =
	TypeMapper<controllerType>[keyof controllerType];

export default facultyController;
