import compression from 'compression';
import { IRequest, IResponse } from '@backend-service-common/types';
export default function (req: IRequest, res: IResponse){
	if (req.headers['x-no-compression']) {
		// don't compress responses with this request header
		return false;
	}

	// fallback to standard filter function
	return compression.filter(req, res);
}
