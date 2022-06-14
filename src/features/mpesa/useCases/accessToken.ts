/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import axios from 'axios';
import { mpesaConfig } from '@exam-cell-config';

export function makeMpesaAccessTokenUseCase() {
	return async () => {
		try {
			const response = await axios.get(
				mpesaConfig.MPESA_ACCESS_TOKEN_URL,
				{
					headers:{
						Authorization: `Basic ${Buffer.from(`${mpesaConfig.MPESA_CONSUMER_KEY}:${mpesaConfig.MPESA_CONSUMER_SECRET}`).toString('base64')}`,
					}
				}
			);

			return response.data;
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
