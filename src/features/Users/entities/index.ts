import Password from '@exam-cell-utils/passwords';
import UserInfoValidator from '../utils/userInfoValidator';
import makeCreateUserEntity from './user';

const createUser = makeCreateUserEntity({
	validator: UserInfoValidator,
	passwordUtil: Password,
});

export { createUser };

export default createUser;

// export type UserInfoValidator = typeof Validate
// Router -> Controller -> UseCase -> {Repository,Entities}