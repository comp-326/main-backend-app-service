import { TypeMapper } from '@exam-cell-common/utils';
import facultyRepository from '../repository';
import { makeAddNewFacultyUseCase } from './addNewFaculty';

const addNewFacultyUseCase = makeAddNewFacultyUseCase({ repository: facultyRepository }

);

export { addNewFacultyUseCase };

const facultyUseCases = Object.freeze({ addNewFacultyUseCase });


type useCases = typeof facultyUseCases;

export type facultyUseCasesType = TypeMapper<useCases>[keyof useCases]

export default facultyUseCases;