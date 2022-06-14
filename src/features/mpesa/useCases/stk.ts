/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import axios from 'axios';
import formatTimestamp from '../utils/timestamp';
import { mpesaConfig } from '@exam-cell-config';

export function makeMpesaStkUseCase() {
	return async (accessToken: string) => {
		try {
			console.log('Simulating MPESA STK', accessToken, formatTimestamp());
			const response = await axios.post(
				mpesaConfig.MPESA_STK_URL,
				{
					BusinessShortCode: '174379',
					TransactionType: 'CustomerPayBillOnline',
					Amount: 1,
					PartyA: 254745364713,
					PartyB: 174379,
					PhoneNumber: 254745364713,
					AccountReference: 'Test',
					TransactionDesc: 'TestPay',
					Password: Buffer.from(
						`174379${
							mpesaConfig.MPESA_STK_PASS_KEY
						}${formatTimestamp()}`,
					).toString('base64'),
					Timestamp: formatTimestamp(),
					CallBackURL: `${mpesaConfig.MPESA_STK_CALLBACK_IP}/stk_callback`,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);

			return response.data;
		} catch (err: any) {
			if (err.response) {
				throw new ExpressError({
					message: err.message,
					status: 'warning',
					statusCode: 400,
					data: {
						message: err.response.data.Message,
						code: err.response.data.ErrorCode,
						statusCode: err.response.status,
						status: err.response.statusText,
					},
				});
			}
			throw new ExpressError({
				message: err.message,
				status: 'warning',
				statusCode: 400,
				data: { err: err },
			});
		}
	};
}
