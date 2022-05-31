import emailRegex from '@exam-cell-constants/emailRegex';

export function validateEmail(email: string): boolean {
	return emailRegex.test(email);
}
