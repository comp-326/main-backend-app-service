/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';

export interface IUser {
    firstName: string
    lastName: string
    email: string
    gender: 'male' | 'female' | 'other' | 'rather not say'
    password: string
    profilePicture?: any
    bio?: string
    isActive?: boolean
    role?: any
    isDeleted?: boolean

}

export interface IUserDocument extends IUser, mongoose.Document {
    _doc: any
    hashPassword: (password: string) => Promise<any>
    confirmPassword: (password: string) => Promise<boolean>
}

export interface IUserDocumentModel extends mongoose.Model<IUserDocument> {
    findByEmail: (email: string) => Promise<IUserDocument>
}