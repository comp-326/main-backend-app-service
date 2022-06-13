import { ExpressError } from '@exam-cell-common/errors/ExpressError';
// import fetch from 'node-fetch';

export function makeMpesaStkUseCase() {
	return async (accessToken: string) => {
		try {
			const url =
					'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
				auth = 'Bearer ' + accessToken;

			const password = Buffer.from(
				'174379' +
					'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919' +
					formatTimestamp(),
			).toString('base64');

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: auth,
				},
				body: JSON.stringify({
					BusinessShortCode: '174379',
					Password: password,
					Timestamp: formatTimestamp(),
					TransactionType: 'CustomerPayBillOnline',
					Amount: '1',
					PartyA: '254716437799',
					PartyB: '174379',
					PhoneNumber: '254716437799',
					CallBackURL: 'http://197.248.86.122:801/stk_callback',
					AccountReference: 'Test',
					TransactionDesc: 'TestPay',
				}),
			});

			return await response.json();
		} catch (err) {
			throw new ExpressError({
				message: 'message',
				status: 'warning',
				statusCode: 400,
				data: { err: err.message },
			});
		}
	};
}

const formatTimestamp = () => {
	const date = new Date();
	const timestamp =
		date.getFullYear() +
		'' +
		'' +
		date.getMonth() +
		'' +
		'' +
		date.getDate() +
		'' +
		'' +
		date.getHours() +
		'' +
		'' +
		date.getMinutes() +
		'' +
		'' +
		date.getSeconds();

	return timestamp;
};
