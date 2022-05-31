import { createNewUnit } from './createUnit';
import { deleteUnitById } from './deleteUnitById';
import { findUnitById } from './findUnitById';
import { findUnitByName } from './findUnitByName';
import { findUnits } from './findUnits';
import { updateUnitById } from './updateUnitById';

export {
	createNewUnit,
	deleteUnitById,
	findUnitById,
	findUnitByName,
	findUnits,
	updateUnitById,
};

const unitRepository = Object.freeze({
	createNewUnit,
	deleteUnitById,
	findUnitById,
	findUnitByName,
	findUnits,
	updateUnitById,
});

export type unitRepositoryType = typeof unitRepository;

export default unitRepository;
