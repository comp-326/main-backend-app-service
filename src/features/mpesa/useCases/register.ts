import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import axios from 'axios';
import { mpesaConfig } from '@exam-cell-config';

export function makeMpesaRegistrationUseCase() {
	return async (accessToken: string) => {
		try {
			console.log('Registering MPESA', accessToken);
			const response = await axios.post(
				mpesaConfig.MPESA_REGISTER_URL,
				{
					ShortCode: 600997,
					ResponseType: 'Completed',
					ConfirmationURL: `${mpesaConfig.MPESA_STK_CALLBACK_IP}/confirmation`,
					ValidationURL: `${mpesaConfig.MPESA_STK_CALLBACK_IP}/validation`,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);

			return response.data;
		} catch (error) {
			throw new ExpressError({
				message:error.message,
				status: 'warning',
				statusCode: 400,
				data: { err: error },
			});
		}
	};
}
