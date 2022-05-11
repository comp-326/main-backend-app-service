import Password from '@backend-service-utils/passwords';
import UserInfoValidator from '../utils/userInfoValidator';
import makeCreateUserEntity from './user';

const createUser = makeCreateUserEntity({
	validator: UserInfoValidator,
	passwordUtil: Password,
});

export { createUser };
export default createUser;

// export type UserInfoValidator = typeof Validate
