import { Types } from 'mongoose';

export default function validateMongodbId(objectId: string){
	if (Types.ObjectId.isValid(objectId)) 
		return String(new Types.ObjectId(objectId)) === objectId ? true : false;
	
	return false;
}
