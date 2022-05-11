/**
 *
 * @param {string} text
 * @returns
 */
export default (text:string) => {
	if (text.charCodeAt(0) > 64 && text.charCodeAt(0) < 97) return text;

	return text.charAt(0).toLocaleUpperCase() + text.slice(1);
};
