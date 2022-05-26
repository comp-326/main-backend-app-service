import { TypeMapper } from '@exam-cell-common/utils';
import lecturerRepository from '../repository';
import { makeAddNewLecturerUseCase } from './addLecturerUseCase';

const addNewLecturerUseCase = makeAddNewLecturerUseCase({ repository: lecturerRepository });

export { addNewLecturerUseCase };

const lecturerUseCases = Object.freeze({ addNewLecturerUseCase });

type useCases = typeof lecturerUseCases;

export type lecturerUseCasesType = TypeMapper<useCases>[keyof useCases]

export default lecturerUseCases;
