/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeMpesaConfirmationUseCase() {
	return async (body: any) => {
		console.log('-------------------- Confirmation -----------------');
		console.log(JSON.stringify(body));
	};
}