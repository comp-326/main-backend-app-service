import CryptoJS from 'crypto-js';
import { JWTPayloadType } from '@exam-cell-common/types';
import {environmentConfig} from '@exam-cell-config';
import jwt from 'jsonwebtoken';

class TokenGEN{
	// constructor() {}

	public generateEncodedToken(payload: JWTPayloadType): string{
		const token = jwt.sign(payload, environmentConfig.SECRET_KEY, { expiresIn: '270h' });
		const encryptedToken = CryptoJS.AES.encrypt(token, environmentConfig.ENC_KEY).toString();

		return encryptedToken;
	}

	public decodeEncodedToken(token: string): string{
		const decryptedToken = CryptoJS.AES.decrypt(token, environmentConfig.ENC_KEY).toString(
			CryptoJS.enc.Utf8
		);

		return decryptedToken;
	}

	public generateSimpleToken = async(payload:JWTPayloadType)=>{
		return jwt.sign(payload, environmentConfig.SECRET_KEY, { expiresIn: '24hr' });
	};
	
	public decodeSimpleToken = async(token:string)=>{
		console.log('\n Decoding \n',token);
		
		return jwt.verify(token, environmentConfig.SECRET_KEY);
	};
}

export default new TokenGEN();
