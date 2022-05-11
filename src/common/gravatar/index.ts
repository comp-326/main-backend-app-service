/* eslint-disable @typescript-eslint/no-inferrable-types */
import CryptoJS from 'crypto-js';

export function generateGravatarUrl(email: string, size: number = 200){
	const hash = CryptoJS.MD5(email).toString();

	return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
}
