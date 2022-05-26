/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@exam-cell-db/mongodb';

export interface IFaculty {
    name: string
}

export interface IFacultyDocument extends IFaculty, mongoose.Document {
    _doc: any
}

export interface IFacultyDocumentModel extends mongoose.Model<IFacultyDocument> {
    findByName: (name: string) => Promise<IFacultyDocument>
}