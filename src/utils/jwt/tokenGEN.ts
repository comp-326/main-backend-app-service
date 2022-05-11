import CryptoJS from 'crypto-js';
import { JWTPayloadType } from '@backend-service-common/types';
import {environmentConfig} from '@backend-service-config';
import jwt from 'jsonwebtoken';

class TokenGEN{
	// constructor() {}

	public generateToken(payload: JWTPayloadType): string{
		const token = jwt.sign(payload, environmentConfig.SECRET_KEY, { expiresIn: '270h' });
		const encryptedToken = CryptoJS.AES.encrypt(token, environmentConfig.ENC_KEY).toString();

		return encryptedToken;
	}

	public decodeToken(token: string): string{
		const decryptedToken = CryptoJS.AES.decrypt(token, environmentConfig.ENC_KEY).toString(
			CryptoJS.enc.Utf8
		);

		return decryptedToken;
	}
}

export default new TokenGEN();
