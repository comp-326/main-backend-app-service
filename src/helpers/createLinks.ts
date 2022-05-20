import { environmentConfig } from '@backend-service-config';

/**
 *
 * @param {{role:string,workspaceId:string}} param0
 * @returns
 */
function createWorkspaceInviteLink({
	role,
	workspaceId
}: {
	role: string;
	workspaceId: string;
}){
	return `http://localhost:${environmentConfig.PORT}/invite/workspace?role=${role}&workspaceId=${workspaceId}`;
}

/**
 *
 * @param {string} param0
 * @returns
 */
function createAccountActivationLink({ token }: { token: string }){
	return `http://localhost:${environmentConfig.PORT}/account/activate/${token}`;
}

/**
 *
 * @param {{baseUrl:string,token:string}} param0
 * @returns
 */
function createForgotPasswordLink(token: string){
	const baseUrl =
		environmentConfig.NODE_ENV === ('development' || 'testing')
			? `http://localhost:${environmentConfig.PORT}/api/v1/users/account/password/reset/${token}`
			: `${environmentConfig.BASE_URL}/api/v1/users/account/password/reset/${token}`;

	return baseUrl;
}

export {
	createWorkspaceInviteLink,
	createAccountActivationLink,
	createForgotPasswordLink
};

export default Object.freeze({
	createWorkspaceInviteLink,
	createAccountActivationLink,
	createForgotPasswordLink
});
