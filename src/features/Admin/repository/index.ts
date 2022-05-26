import { createNewAdmin } from './createAdmin';
import { findAllAdmins } from './findAll';

export { createNewAdmin,findAllAdmins };

const adminRepository = Object.freeze({ createNewAdmin ,findAllAdmins});

export type AdminRepositoryType = typeof adminRepository

export default adminRepository;