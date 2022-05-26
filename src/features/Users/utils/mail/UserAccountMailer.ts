import ExamCellAutomatonMailer from '@exam-cell-services/mailService/mailer';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import createLinks from '@exam-cell-helpers/createLinks';
import { mailConfig } from '@exam-cell-config';
import moment from 'moment';
import tokenGenerator from '@exam-cell-helpers/tokenGenerator';
import {
	accountActivationEmailTemplate,
	passwordResetEmailTemplate
} from '@exam-cell-services/mailService';

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
				const res = await ExamCellAutomatonMailer.sendMail({
					to: email,
					date: moment(new Date().getTime()).format('LLLL'),
					from: mailConfig.EMAIL_USER,
					sender: 'exam cell Info',
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
				const res = await ExamCellAutomatonMailer.sendMail({
					to: email,
					date: moment(new Date().getTime()).format('LLLL'),
					sender: 'ExamCellAutomaton Info',
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
