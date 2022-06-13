/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeMpesaBalanceResultUseCase() {
	return async (body: any) => {
		console.log('-------------------- Balance Result -----------------');
		console.log(JSON.stringify(body.Result));
	};
}
