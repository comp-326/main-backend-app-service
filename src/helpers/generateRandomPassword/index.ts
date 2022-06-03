import { generate } from './generator';
import { shuffleString } from 'string-shuffle';

const generateRandomPassword = generate(shuffleString);

export { generateRandomPassword };

export type generateRandomPasswordType = typeof generateRandomPassword;

export default generateRandomPassword;
