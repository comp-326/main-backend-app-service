import AppEvents from '@exam-cell-constants/events';
import { EmailDataType } from '@exam-cell-common/types';
import { Publisher } from '@exam-cell-RedisBaseClient';

export function subscribeToNewAccountMailer(emailData: EmailDataType) {
	Publisher.publish(
		AppEvents.NEW_ACCOUNT,
		JSON.stringify({
			...emailData,
		}),
	);
}
