/* eslint-disable @typescript-eslint/no-explicit-any */
import { INext, Request, Response } from 'express';

export type IRequest = { [x: string]: any } & Request

export type IResponse = Response

export type INext = INext

export type JWTPayloadType ={
    [x:string]:any
    userId:string
    email?:string
}
