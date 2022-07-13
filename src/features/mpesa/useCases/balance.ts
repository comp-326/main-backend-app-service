import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import axios from 'axios';
import { mpesaConfig } from '@exam-cell-config';

export function makeMpesaBalanceUseCase() {
	return async (accessToken: string) => {
		try {
			const response = await axios.post(
				mpesaConfig.MPESA_BALANCE_URL,
				{
					Initiator: 'testapi',
					SecurityCredential:
						'o3VpxVq5Ip+nnRKK1MI6UGp0gcs9pjuI1Y1sPpQUEQ0GffW+HZibeuqz2mDdbiKGLcCLtJe9SdSIkeq6tSBeIn0nirNFYhPNIglylDuahnwQ1ZaPTpLOrVjbuAeNbLDIaA2sy8PCmrelAec0GwJLrbDQ4mXpMaKbNfAR5h4sfHeXzieqm60oIxz2juLL7J1OAf3QBpRk3zdyTySVj1FQhcjT/F6wSieje+ma6ZWdypmi8wvi8sr1/KVx+vuFRPOz0RMW/pNPdXiYA4Hqy6u0TVdTXJoXQYaz67+OLX8j/5M42DWhXUXJLm/vF7IdoYoRmNg6srI3wmTNVa1jgxDRdw==',
					CommandID: 'AccountBalance',
					PartyA: 600584,
					IdentifierType: 4,
					Remarks: 'Completed',
					QueueTimeOutURL: `${mpesaConfig.MPESA_CALLBACK_IP}/bal_timeout`,
					ResultURL: `${mpesaConfig.MPESA_CALLBACK_IP}/bal_result`,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Type': 'application/json',
					},
				},
			);

			return response.data;
		} catch (error) {
			throw new ExpressError({
				message: error.message,
				status: 'warning',
				statusCode: 400,
				data: { err: error },
			});
		}
	};
}
