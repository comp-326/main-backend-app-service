import { facultyUseCasesType } from './../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: facultyUseCasesType;
};

export function makeGetFacultyByNameController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase.listFacultyByNameUseCase(req.query.name as string);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}
