import { ExpressError } from '@exam-cell-common/errors/ExpressError';
// import fetch from 'node-fetch';

export function makeMpesaReversalUseCase() {
	return async (accessToken: string) => {
		try {
			const fetch = await import('node-fetch').then((mod) => mod.default);
			const url =
					'https://sandbox.safaricom.co.ke/mpesa/reversal/v1/request',
				auth = 'Bearer ' + accessToken;

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: auth,
				},
				body: JSON.stringify({
					Initiator: 'apitest342',
					SecurityCredential:
						'Q9KEnwDV/V1LmUrZHNunN40AwAw30jHMfpdTACiV9j+JofwZu0G5qrcPzxul+6nocE++U6ghFEL0E/5z/JNTWZ/pD9oAxCxOik/98IYPp+elSMMO/c/370Joh2XwkYCO5Za9dytVmlapmha5JzanJrqtFX8Vez5nDBC4LEjmgwa/+5MvL+WEBzjV4I6GNeP6hz23J+H43TjTTboeyg8JluL9myaGz68dWM7dCyd5/1QY0BqEiQSQF/W6UrXbOcK9Ac65V0+1+ptQJvreQznAosCjyUjACj35e890toDeq37RFeinM3++VFJqeD5bf5mx5FoJI/Ps0MlydwEeMo/InA==',
					CommandID: 'TransactionReversal',
					TransactionID: 'NLJ11HAY8V',
					Amount: '100',
					ReceiverParty: '601342',
					RecieverIdentifierType: '11',
					ResultURL: 'http://197.248.86.122:801/reverse_result_url',
					QueueTimeOutURL:
						'http://197.248.86.122:801/reverse_timeout_url',
					Remarks: 'Wrong Num',
					Occasion: 'sent wrongly',
				}),
			});

			return await response.json();
		} catch (err) {
			throw new ExpressError({
				message: 'message',
				status: 'warning',
				statusCode: 400,
				data: { err: err.mesage },
			});
		}
	};
}
