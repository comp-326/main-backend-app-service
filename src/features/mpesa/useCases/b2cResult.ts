/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeMpesaB2CResultUrlUsecase() {
	return async (body: any) => {
		console.log('-------------------- B2C Result -----------------');
		console.log(JSON.stringify(body));
	};
}
