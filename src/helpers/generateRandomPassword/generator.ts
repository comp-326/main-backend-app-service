/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ShuffleStringType } from 'string-shuffle';
import { numbers } from 'string-shuffle/build/utils/alphabet';
import { lowerCaseLetters, symbols, upperCaseLetters } from 'string-shuffle';

type GenPropType = {
	lower?: number;
	upper?: number;
	symb?: number;
	num?: number;
	shuffle?: boolean;
};

type GeneratorType = ({
	lower,
	num,
	shuffle,
	symb,
	upper,
}?: Partial<GenPropType>) => string;

/**
 *
 * @param {ShuffleStringType} shuffleString
 * @returns
 */
export function generate(shuffleString: ShuffleStringType): GeneratorType {
	/**
	 * Generate random string from concatenation of lowercase letters, uppercase letters, numbers and symbols
	 * @param {number} lower A number for number of required lower case letters
	 * @param {number} upper A number for number of required upper case letters
	 * @param {number} symb A number for number of required symbols
	 * @param {number} num A number for number of required numbers
	 * @returns {string} A generated shuffled string if
	 */
	return <GeneratorType>(<unknown>(({
		lower = 2,
		num = 2,
		symb = 0,
		upper = 0,
		shuffle = true,
	}: GenPropType): string => {
		let string = '';
		for (let low = 0; low < lower; low++) {
			string +=
				lowerCaseLetters[
					Math.floor(Math.random() * lowerCaseLetters.length)
				];
		}
		for (let up = 0; up < upper; up++) {
			string +=
				upperCaseLetters[
					Math.floor(Math.random() * upperCaseLetters.length)
				];
		}
		for (let sym = 0; sym < symb; sym++)
			string += symbols[Math.floor(Math.random() * symbols.length)];

		for (let nums = 0; nums < num; nums++)
			string += numbers[Math.floor(Math.random() * numbers.length)];

		return shuffle ? shuffleString(string) : string;
	}));
}
