/* eslint-disable @typescript-eslint/no-explicit-any */
// import fetch from 'node-fetch';
import axios from 'axios';
import { mpesaConfig } from '@exam-cell-config';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

export async function getMpesaAccessToken(
	req: IRequest,
	res: IResponse,
	next: INext,
) {
	try {
		const response = await axios.get(mpesaConfig.MPESA_ACCESS_TOKEN_URL, {
			headers: {
				Authorization: `Basic ${Buffer.from(
					`${mpesaConfig.MPESA_CONSUMER_KEY}:${mpesaConfig.MPESA_CONSUMER_SECRET}`,
				).toString('base64')}`,
			},
		});

		req.mpesaAccessToken = response.data.access_token;

		return next();
	} catch (err: any) {
		return next(err);
	}
}
