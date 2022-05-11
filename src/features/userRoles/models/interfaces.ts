/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@backend-service-db/mongodb';

export interface IUserRole {
    name: string;
    permissions: number;
    default: boolean;
}

export interface IUserRoleDocument extends IUserRole, mongoose.Document {
    _doc: any
    resetPermission: () => void;
    addPermission: (permission: number) => void;
    removePermission: (permission: number) => void;
    hasPermission: (permission: number) => boolean;
}

export interface IUserRoleDocumentModel extends mongoose.Model<IUserRoleDocument> {
    insertRoles: () => void;
    getDefaultRole: () => Promise<any>;
    InsertRoles: () => Promise<any>;
}  