/* eslint-disable @typescript-eslint/naming-convention */
const AppEvents = {
	RESET_PASSWORD: 'RESET_PASSWORD',
	NEW_ACCOUNT: 'NEW_ACCOUNT',
};

export default AppEvents;

export { AppEvents };

export type AppEventsType = typeof AppEvents;
