import { IPassword } from '@exam-cell-features/Users/interfaces';
import bcryptjs from 'bcryptjs';

class Password implements IPassword{
	/**
	 *
	 * @param {string} password
	 */
	hashPassword = async (password: string) => {
		const salt = await bcryptjs.genSalt(12);
		const hashedPassword = await bcryptjs.hash(password, salt);

		return hashedPassword;
	};

	/**
	 *
	 * @param {string} password
	 * @param {string} passwordHash
	 * @returns
	 */
	comparePassword = async (password: string, passwordHash: string) => {
		const match = await bcryptjs.compare(password, passwordHash);

		return match;
	};
}

export default new Password();
