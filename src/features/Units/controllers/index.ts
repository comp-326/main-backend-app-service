import { TypeMapper } from '@exam-cell-common/utils';
import { makeCreateNewUnitController } from './createNewUnit';
import { makeDeleteUnitByIdController } from './deleteUnitById';
import { makeFindUnitByIdController } from './findUnitById';
import { makeFindUnitByNameController } from './findUnitByName';
import { makeFindUnitsController } from './findUnits';
import { makeUpdateUnitController } from './updateUnitById';
import useCase from '../use-cases';

const createNewUnitController = makeCreateNewUnitController({
	useCase,
});
const deleteUnitByIdController = makeDeleteUnitByIdController({
	useCase,
});
const findUnitByIdController = makeFindUnitByIdController({
	useCase,
});
const findUnitByNameController = makeFindUnitByNameController({
	useCase,
});
const findUnitsController = makeFindUnitsController({
	useCase,
});
const updateUnitController = makeUpdateUnitController({
	useCase,
});

export {
	createNewUnitController,
	deleteUnitByIdController,
	findUnitByIdController,
	findUnitByNameController,
	findUnitsController,
	updateUnitController,
};

const unitController = Object.freeze({
	createNewUnitController,
	deleteUnitByIdController,
	findUnitByIdController,
	findUnitByNameController,
	findUnitsController,
	updateUnitController,
});

type unitType = typeof unitController;

export type unitControllerType = TypeMapper<unitType>[keyof unitType];
