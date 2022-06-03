/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmailDataType } from '@exam-cell-common/types';
import ExamCellmailer from '@exam-cell-services/mailService/mailer';
import { accountCreationEmailTemplate } from '@exam-cell-services/mailService';
import { mailLogger } from '@exam-cell-utils/logger';
import moment from 'moment';

export async function sendNewAccountEmail(
	data: EmailDataType,
	cb: (err: any, data: any) => Promise<any>,
) {
	try {
		const emailData = accountCreationEmailTemplate(data);
		const response = await ExamCellmailer.sendMail({
			from: '"ExamCellAutomaton" <ExamCell@mail.com>',
			to: data.email,
			subject: 'Welcome to ExamCellAutomaton',
			html: emailData,
		});
		mailLogger.info(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				email: data.email,
				subject: 'Welcome to ExamCellAutomaton',
				response: response,
				status: 'success',
			}),
		);
		cb(null, response);
	} catch (err) {
		mailLogger.error(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				email: data.email,
				subject: 'Welcome to ExamCellAutomaton',
				err,
				status: 'Failed',
			}),
		);
		cb(err, null);
	}
}
