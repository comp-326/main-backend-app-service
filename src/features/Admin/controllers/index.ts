import { TypeMapper } from '@exam-cell-common/utils';
import { addNewAdminUseCase } from '../use-cases';
import { makeCreateAdminController } from './createAdmin';

const createAdminController = makeCreateAdminController({ useCase: addNewAdminUseCase });

export { createAdminController };

const adminController = Object.freeze({ createAdminController });

type adminControllerType = typeof adminController

export default adminController;

export type AdminControllerType = TypeMapper<adminControllerType>[keyof adminControllerType]