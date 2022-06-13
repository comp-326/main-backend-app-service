/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeMpesaValidationUseCase() {
	return async (body: any) => {
		console.log('-------------------- Validation -----------------');
		console.log(body);
	};
}
