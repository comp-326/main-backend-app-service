/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import formatTimestamp from '../utils/timestamp';
import { mpesaConfig } from '@exam-cell-config';
import axios, { AxiosError } from 'axios';

export function makeMpesaStkUseCase() {
	return async (accessToken: string) => {
		try {
			const password = Buffer.from(
				`174379${mpesaConfig.MPESA_STK_PASS_KEY}${formatTimestamp()}`,
			).toString('base64');
			console.log(password);
			console.log(mpesaConfig.MPESA_CALLBACK_IP);
			

			const response = await axios.post(
				mpesaConfig.MPESA_STK_URL,
				{
					BusinessShortCode: parseInt(
						mpesaConfig.MPESA_STK_BUSINESS_SHORT_CODE,
					),
					Password: password,
					Timestamp: formatTimestamp(),
					TransactionType: 'CustomerPayBillOnline',
					Amount: 1,
					PartyA: 254708374149,
					PartyB: 174379,
					PhoneNumber: 254745364713,
					CallBackURL: `${mpesaConfig.MPESA_CALLBACK_IP}/stk_callback`,
					AccountReference: 'Exam-Cell-Automation',
					TransactionDesc: 'Payment of School fees',
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);

			return response.data;
		} catch (err: any) {
			if (err instanceof AxiosError) {
				throw new ExpressError({
					message: err.message!,
					status: 'warning',
					statusCode: 400,
					data: {
						...err.response?.data,
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
