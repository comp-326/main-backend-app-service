import { createNewAdmin } from './createAdmin';
import { deleteAdminById } from './deleteAdminById';
import { findAdminByEmail } from './findAdminByEmail';
import { findAdminById } from './findAdminById';
import { findAllAdmins } from './findAllAdmins';
import { updateAdminById } from './updateAdminById';

export {
	createNewAdmin,
	findAllAdmins,
	findAdminById,
	updateAdminById,
	findAdminByEmail,
	deleteAdminById,
};

const adminRepository = Object.freeze({
	createNewAdmin,
	findAllAdmins,
	findAdminById,
	updateAdminById,
	findAdminByEmail,
	deleteAdminById,
});

export type AdminRepositoryType = typeof adminRepository;

export default adminRepository;
