import { TypeMapper } from '@exam-cell-common/utils';
import { addNewUnitUseCase } from '../use-cases';
import { makeCreateNewUnitController } from './createNewUnit';

const createNewUnitController = makeCreateNewUnitController({
	useCase: addNewUnitUseCase,
});

export { createNewUnitController };

const unitController = Object.freeze({ createNewUnitController });

type unitType = typeof unitController;

export type unitControllerType =
  TypeMapper<unitType>[keyof unitType];
