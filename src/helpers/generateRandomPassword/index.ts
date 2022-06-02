import { generate } from './generator';
import { shuffleString } from 'string-shuffle';
// import { shuffleString } from '@exam-cell-helpers/shuffle/shuffleString';

const generateRandomPassword = generate(shuffleString);

export { generateRandomPassword };

export type generateRandomPasswordType = typeof generateRandomPassword;

export default generateRandomPassword;
