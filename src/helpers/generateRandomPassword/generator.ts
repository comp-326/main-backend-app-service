/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ShuffleStringType } from 'string-shuffle';
import { numbers } from 'string-shuffle/build/utils/alphabet';
import { lowerCaseLetters, symbols, upperCaseLetters } from 'string-shuffle';

export function generate(shuffleString: ShuffleStringType) {
	return () => {
		const passwordLength = 12;

		let password = '';
		for (let i = 0; i < passwordLength; i++) {
			i < 3
				? (password +=
						upperCaseLetters[
							Math.floor(Math.random() * upperCaseLetters.length)
						])
				: i < 6
					? (password +=
						lowerCaseLetters[
							Math.floor(Math.random() * lowerCaseLetters.length)
						])
					: i < 8
						? (password +=
						numbers[Math.floor(Math.random() * numbers.length)])
						: (password +=
						symbols[Math.floor(Math.random() * symbols.length)]);
		}

		return shuffleString(password);
	};
}
