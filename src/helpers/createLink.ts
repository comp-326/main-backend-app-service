import { environmentConfig } from '@exam-cell-config';


/**
 *
 * @param {{role:string,workspaceId:string}} param0
 * @returns
 */
function createWorkspaceInviteLink({
	role,
	workspaceId,
}: {
	role: string,
	workspaceId: string,
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
function createForgotPasswordLink({ baseUrl, token }:{baseUrl:string,token:string}){
	return `${baseUrl}/${token}`;
}

export { createWorkspaceInviteLink, createAccountActivationLink,createForgotPasswordLink, };

export default Object.freeze({
	createWorkspaceInviteLink,
	createAccountActivationLink,
	createForgotPasswordLink,
});
