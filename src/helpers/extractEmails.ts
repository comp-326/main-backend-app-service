/**
 *
 * @param {string} text
 */
export default function ({ text }: { text: string }){
	const regex = new RegExp(
		/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
	);

	return text.match(regex);
}
