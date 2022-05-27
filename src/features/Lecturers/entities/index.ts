import Password from '@exam-cell-utils/passwords';
import UserInfoValidator from '../utils/userInfoValidator';
import { makeCreateLecturerEntity } from './lecturer';

const createLecturerEntity = makeCreateLecturerEntity({
	validator: UserInfoValidator,
	passwordUtil: Password,
});

export { createLecturerEntity };

export type createLecturerEntityType = typeof createLecturerEntity

export default createLecturerEntity;
// export type UserInfoValidator = typeof Validate
