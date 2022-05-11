import { ExpressError } from '@backend-service-common/errors/ExpressError';
import OstrichMailer from '@backend-service-services/mailService/mailer';
import createLinks from '@backend-service-helpers/createLinks';
import { mailConfig } from '@backend-service-config';
import moment from 'moment';
import tokenGenerator from '@backend-service-helpers/tokenGenerator';
import {
	accountActivationEmailTemplate,
	passwordResetEmailTemplate
} from '@backend-service-services/mailService';

class Accountmailer{
	sendPasswordResetLink = () => {
		return async function ({
			firstName,
			lastName,
			email,
			// eslint-disable-next-line @typescript-eslint/naming-convention
			_id
		}: {
			email: string;
			firstName: string;
			lastName: string;
			_id: string;
		}){
			let sent = false;
			const token = tokenGenerator.generatePasswordResetToken({ userId: _id })(
				'24h'
			);

			const link = createLinks.createForgotPasswordLink(token);
			const template = passwordResetEmailTemplate({
				firstName,
				lastName,
				link
			});

			try {
				const res = await OstrichMailer.sendMail({
					to: email,
					date: moment(new Date().getTime()).format('LLLL'),
					from: mailConfig.EMAIL_USER,
					sender: 'Ostrich Info',
					subject: 'Reset your password',
					html: template
				});
				res && (sent = true);

				return sent;
			} catch (err) {
				throw new ExpressError({
					message: err.message,
					data: {},
					status: 'error',
					statusCode: 500
				});
			}
		};
	};

	sendEmailActivationLink = () => {
		return async function ({
			email,
			firstName,
			lastName,
			// eslint-disable-next-line @typescript-eslint/naming-convention
			_id
		}: {
			email: string;
			firstName: string;
			lastName: string;
			_id: string;
		}){
			let sent = false;
			const token = tokenGenerator.generatePasswordResetToken({ userId: _id })(
				'24h'
			);

			const link = createLinks.createAccountActivationLink({ token });
			const template = accountActivationEmailTemplate({
				firstName,
				lastName,
				link
			});

			try {
				const res = await OstrichMailer.sendMail({
					to: email,
					date: moment(new Date().getTime()).format('LLLL'),
					sender: 'Ostrich Info',
					from: mailConfig.EMAIL_USER,
					subject: 'Activate your account',
					html: template
				});
				res && (sent = true);

				return sent;
			} catch (err) {
				throw new ExpressError({
					message: err.message,
					data: {},
					status: 'error',
					statusCode: 500
				});
			}
		};
	};
}

export default new Accountmailer();
