/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '@backend-service/features/users/models/interfaces';
import { INext, IRequest, IResponse } from '@backend-service/common/types';

type userType = {
    email:string,
    password:string
}

export interface IAuthUseCase{
    login:(userData:Pick<IUser,keyof userType>)=>Promise<any>
}

export interface IAuthController{
    login:(req:IRequest,res:IResponse,next:INext)=>Promise<any>
    logout:(req:IRequest,res:IResponse,next:INext)=>Promise<any>
}

export interface IAuthRepository{
    getUserByEmail:(email:string)=>Promise<any>
}