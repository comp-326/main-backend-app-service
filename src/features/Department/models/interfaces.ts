/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';

export interface IDepartment {
    name: string
    faculty: any
}

export interface IDepartmentDocument extends IDepartment, mongoose.Document {
    _doc: any
}

export interface IDepartmentDocumentModel extends mongoose.Model<IDepartmentDocument> {
    findByName: (name: string) => Promise<IDepartmentDocument>
}