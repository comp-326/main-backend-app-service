import Password from '@exam-cell-utils/passwords';
import UserInfoValidator from '../utils/userInfoValidator';
import { makeCreateStudentEntity } from './student';

const createStudentEntity = makeCreateStudentEntity({
	validator: UserInfoValidator,
	passwordUtil: Password,
});

export { createStudentEntity };

export type createStudentEntityType = typeof createStudentEntity

export default createStudentEntity;

