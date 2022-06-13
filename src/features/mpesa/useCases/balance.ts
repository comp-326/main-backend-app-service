import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { mpesaConfig } from '@exam-cell-config';

export function makeMpesaBalanceUseCase() {
	return async (accessToken: string) => {
		try {
			const fetch = await import('node-fetch').then((mod) => mod.default);

			const response = await fetch(mpesaConfig.MPESA_BALANCE_URL, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({
					Initiator: 'testapi',
					SecurityCredential:
						'EmoOWq8cf3Gh+eBc59sMr1+x3UNt0Ts+0y2sP2FDbAwsWi2wOFW429c2LrjoE4z5S+Wir/er6MX8zOUTT+Ff4oP6N0YX662SHhXGJshCzSMEktTRr9SturjG99rb2H9BsN1c1JjSFobU9FfEVhE0Oj8Aj6Q++Nq2jffQuw0v/B4T1V71WkdS+PPhXHBaePqDwZknrfeH3PXrZXjlXYNK8RkZHWLnggpthbpmAbCKtIZgcUz72xhqp2jURrTccfv2aExIYoAVyZnirBixOxYrkKuWvLIbkHXN6wEOhxhdAyF4Dm2KuK/2K99MLXr5UXVFFub/v/OSV+1xUCUc6iBR8A==',
					CommandID: 'AccountBalance',
					PartyA: 600999,
					IdentifierType: '4',
					Remarks: 'Success ',
					QueueTimeOutURL: `${mpesaConfig.MPESA_STK_CALLBACK_IP}/bal_timeout`,
					ResultURL: `${mpesaConfig.MPESA_STK_CALLBACK_IP}/bal_result`,
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
