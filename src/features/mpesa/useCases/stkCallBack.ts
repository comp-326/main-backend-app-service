/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeMpesaStkCallbackUseCase() {
	return async (body: any) => {
		console.log('-------------------- STK Callback -----------------');
		console.log(body);
	};
}
