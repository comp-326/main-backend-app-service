/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeMpesaBalanceTimeoutUseCase() {
	return async (body: any) => {
		console.log('-------------------- Balance Timeout -----------------');
		console.log(JSON.stringify(body.Result));
	};
}
