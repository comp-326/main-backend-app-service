/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { mpesaConfig } from '@exam-cell-config';

export function makeMpesaAccessTokenUseCase() {
	return async () => {
		try {
			const fetch = await import('node-fetch').then((mod) => mod.default);
			const response = await fetch(mpesaConfig.MPESA_ACCESS_TOKEN_URL, {
				method: 'GET',
				headers: {
					// Authorization: 'Bearer ZERISlRjakpDM1ZhdVNuMUlTczBNMVBtbHRMOXREZzA6d0dDaTlQSUNCU0VoUmF5cA==',
					Authorization: `Bearer ${mpesaConfig.MPESA_AUTH_KEY}`,
				},
			});
		
			return response.json();
		} catch (err: any) {
			throw new ExpressError({
				message: err.message,
				status: 'warning',
				statusCode: 400,
				data: {
					err,
				},
			});
		}
	};
}
