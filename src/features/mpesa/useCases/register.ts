import { ExpressError } from '@exam-cell-common/errors/ExpressError';
// import fetch from 'node-fetch';

export function makeMpesaRegistrationUseCase() {
	return async (accessToken: string) => {
		try {
			const fetch = await import('node-fetch').then((mod) => mod.default);
			const url =
				'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl';
			const auth = 'Bearer ' + accessToken;
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: auth,
				},
				body: JSON.stringify({
					ShortCode: '600383',
					ResponseType: 'Complete',
					ConfirmationURL: 'http://197.248.86.122:801/confirmation',
					ValidationURL: 'http://197.248.86.122:801/validation',
				}),
			});

			return await response.json();
		} catch (error) {
			throw new ExpressError({
				message: 'message',
				status: 'warning',
				statusCode: 400,
				data: { err: error.message },
			});
		}
	};
}
