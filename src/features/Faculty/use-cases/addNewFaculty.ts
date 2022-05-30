import { FacultyRepositoryType } from '../repository';
import { IFaculty } from './../models/interfaces';
import { createFacultyEntity } from '../entities';
import facultyModel from '../models';

type Props = {
	repository: FacultyRepositoryType;
};

export function makeAddNewFacultyUseCase({ repository }: Props) {
	return async ( faculty: IFaculty ) => {
		const { getName } = createFacultyEntity(faculty);
		const facultyEntity = await repository.createNewFaculty({
			model: facultyModel,
		})({
			name: getName(),
		});

		return facultyEntity;
	};
}
