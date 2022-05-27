import { TypeMapper } from '@exam-cell-common/utils';
import { makeAddNewUnitUseCase } from './addNewUnit';
import unitRepository from './../repository';

const addNewUnitUseCase = makeAddNewUnitUseCase({
	repository: unitRepository,
});

export { addNewUnitUseCase };

const unitUseCases = Object.freeze({ addNewUnitUseCase });

type useCases = typeof unitUseCases;

export type unitUseCasesType = TypeMapper<useCases>[keyof useCases];

export default unitUseCases;
