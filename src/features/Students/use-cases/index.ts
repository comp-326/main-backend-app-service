import { TypeMapper } from '@exam-cell-common/utils';
import adminRepository from '../repository';
import { makeAddNewAdminUseCase } from './addAdminUseCase';

const addNewAdminUseCase = makeAddNewAdminUseCase({ repository: adminRepository });

export { addNewAdminUseCase };

const adminUseCases = Object.freeze({ addNewAdminUseCase });

type useCases = typeof adminUseCases;

export type AdminUseCasesType = TypeMapper<useCases>[keyof useCases]

export default adminUseCases;
