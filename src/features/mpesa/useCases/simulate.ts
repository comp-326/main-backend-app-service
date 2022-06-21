import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import axios from 'axios';
import { mpesaConfig } from '@exam-cell-config';

export function makeMpesaSimulationUseCase() {
	return async (accessToken: string) => {
		try {
			console.log('Simulating MPESA', accessToken);

			const resp = await axios.post(
				mpesaConfig.MPESA_C2B_SIMULATION_URL,
				{
					ShortCode: '600997',
					CommandID: 'CustomerPayBillOnline',
					Amount: '1',
					Msisdn: '254708374149',
					BillRefNumber: 'TestAPI',
				},

				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);

			return resp.data;
		} catch (error) {
			throw new ExpressError({
				message: error.message,
				status: 'warning',
				statusCode: 400,
				data: { err: error.response.data },
			});
		}
	};
}
