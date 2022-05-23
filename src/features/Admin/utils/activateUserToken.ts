import { JWTPayloadType } from '@exam-cell-common/types';
import { environmentConfig } from '@exam-cell-config';
import jwt from 'jsonwebtoken';

export function activateUserTokenDecode(token: string){
	const decoded = jwt.verify(token, environmentConfig.SECRET_KEY) as JWTPayloadType;

	return decoded;
}
