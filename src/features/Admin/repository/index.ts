import { createNewAdmin } from './createAdmin';

export { createNewAdmin };

const adminRepository = Object.freeze({ createNewAdmin });

export type AdminRepositoryType = typeof adminRepository

export default adminRepository;