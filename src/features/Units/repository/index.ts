import { createNewUnit } from './createUnit';

export { createNewUnit };

const unitRepository = Object.freeze({
	createNewUnit,
});

export type unitRepositoryType = typeof unitRepository;

export default unitRepository;