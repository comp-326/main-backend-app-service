/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeMpesaReverseResultUrl() {
	return async (body: any) => {
		console.log('--------------------Reverse Result -----------------');
		console.log(JSON.stringify(body.Result.ResultParameters));
	};
}
