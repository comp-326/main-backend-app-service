import Password from '@exam-cell-utils/passwords';
import UserInfoValidator from '../utils/userInfoValidator';
import { makeCreateAdminEntity } from './admin';

const createAdminEntity = makeCreateAdminEntity({
	validator: UserInfoValidator,
	passwordUtil: Password,
});

export { createAdminEntity };

export type createAdminEntityType = typeof createAdminEntity

export default createAdminEntity;
// export type UserInfoValidator = typeof Validate
