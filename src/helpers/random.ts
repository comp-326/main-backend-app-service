import Alphabet from './alphabet';
/**
 *@param {number} length
 * @returns
 */
export default function (length: number){
	try {
		if (!(length >= 8) || length > 12) 
			throw new Error('Length must be >= 8 and <=12');
		
		let password = '';
		const alpha = Alphabet.ALPHABETS;
		// console.log(alpha,Math.ceil( + 1)
		for (let i = 0; i < length; i++) {
			const position = Math.random() * (alpha.length - 1);
			password += alpha[Math.round(position)];
		}

		return password;
	} catch (error) {
		return error.message;
	}
}
