import { TypeMapper } from '@exam-cell-common/utils';
import { makeAddNewUnitUseCase } from './addNewUnit';
import { makeEditUnitByIdUseCase } from './editUnitById';
import { makeListUnitByIdUseCase } from './listUnitById';
import { makeListUnitByNameUseCase } from './listUnitByName';
import { makeListUnitUseCase } from './listUnits';
import { makeRemoveUnitByIdUseCase } from './removeUnitById';
import unitRepository from './../repository';

const addNewUnitUseCase = makeAddNewUnitUseCase({
	repository: unitRepository,
});
const editUnitByIdUseCase = makeEditUnitByIdUseCase({
	repository: unitRepository,
});
const listUnitByIdUseCase = makeListUnitByIdUseCase({
	repository: unitRepository,
});
const listUnitByNameUseCase = makeListUnitByNameUseCase({
	repository: unitRepository,
});
const listUnitUseCase = makeListUnitUseCase({
	repository: unitRepository,
});
const removeUnitByIdUseCase = makeRemoveUnitByIdUseCase({
	repository: unitRepository,
});

export {
	addNewUnitUseCase,
	editUnitByIdUseCase,
	listUnitByIdUseCase,
	listUnitByNameUseCase,
	listUnitUseCase,
	removeUnitByIdUseCase,
};

const unitUseCases = Object.freeze({
	addNewUnitUseCase,
	editUnitByIdUseCase,
	listUnitByIdUseCase,
	listUnitByNameUseCase,
	listUnitUseCase,
	removeUnitByIdUseCase,
});

type useCases = typeof unitUseCases;

export type unitUseCasesType = TypeMapper<useCases>;

export default unitUseCases;
