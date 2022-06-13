// import fetch from 'node-fetch';
import { mpesaConfig } from '@exam-cell-config';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

export async function getMpesaAccessToken(
	req: IRequest,
	res: IResponse,
	next: INext,
) {
	// access token
	try {
		const fetch = await import('node-fetch').then((mod) => mod.default);
		const response = await fetch(mpesaConfig.MPESA_ACCESS_TOKEN_URL, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${mpesaConfig.MPESA_AUTH_KEY}`,
			},
		});

		const data = await response.json();
		console.log('Token data', data);
		req.mpesaAccessToken = data.access_token;

		return next();
	} catch (error) {
		return next(error);
	}
}
