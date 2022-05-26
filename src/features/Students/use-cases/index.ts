import { TypeMapper } from '@exam-cell-common/utils';
import adminRepository from '../repository';
import { makeAddNewStudentUseCase } from './addStudent';

const addNewStudentUseCase = makeAddNewStudentUseCase({ repository: adminRepository });

export { addNewStudentUseCase };

const studentUseCases = Object.freeze({ addNewStudentUseCase });

type useCases = typeof studentUseCases;

export type StudentUseCasesType = TypeMapper<useCases>[keyof useCases]

export default studentUseCases;
