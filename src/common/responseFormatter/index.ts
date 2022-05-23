/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodeType, StatusType } from '@exam-cell-common/errors/ExpressError';

export interface ISuccessResponse {
    data: any,
    statusCode: StatusCodeType,
    status: StatusType,
    message: string,
    params?: any
}

class ResponseFormatter{
	ResponseWithData({ data, message, statusCode, params, status }: ISuccessResponse){
		return {
			data,
			message,
			statusCode,
			params,
			status
		};
	}

	ResponseWithStatusCode({ statusCode }: Pick<ISuccessResponse, 'statusCode'>){
		return statusCode;
	}

	ResponseWithUnauthenticated(){
		return {
			data:{},
			message:'Please login to access this page',
			statusCode:401,
			params:{},
			status:'warning'
		};
	}
}

export default new ResponseFormatter();