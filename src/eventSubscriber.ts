/* eslint-disable @typescript-eslint/no-explicit-any */
import AppEvents from '@exam-cell-constants/events';
import { SubScriber } from '@exam-cell-RedisBaseClient';
import chalk from 'chalk';
import { sendNewAccountEmail } from '@exam-cell-services/resources/mail/sendNewAccountEmail';


// Subscribe for events
SubScriber.subscribe(AppEvents.NEW_ACCOUNT).then(() => {
	console.log(chalk.cyan('Subscribed to event: ' + AppEvents.NEW_ACCOUNT));
});
SubScriber.getMessage(async (channel: string, data: any) => {
	if (channel === AppEvents.NEW_ACCOUNT) {
		try {
			await sendNewAccountEmail(
				JSON.parse(data),
				async (err: any, data: any) => {
					if (err)
						console.log(chalk.red('Error sending email: ' + err));
					else
					{console.log(
						chalk.green('Email sent successfully', JSON.stringify(data)),
					);}
				},
			);
		} catch (err) {
			console.log(err);
		}
	}
});