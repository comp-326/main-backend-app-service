import { JWTPayloadType } from '@backend-service-common/types';
import { environmentConfig } from '@backend-service-config';
import jwt from 'jsonwebtoken';

export function activateUserTokenDecode(token: string){
	const decoded = jwt.verify(token, environmentConfig.SECRET_KEY) as JWTPayloadType;

	return decoded;
}
