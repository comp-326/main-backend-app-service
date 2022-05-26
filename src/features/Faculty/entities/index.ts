import { makeCreateFacultyEntity } from './faculty';


const createFacultyEntity = makeCreateFacultyEntity();

export {createFacultyEntity};

export type createFacultyEntityType = typeof createFacultyEntity

