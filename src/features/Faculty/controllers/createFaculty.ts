import { facultyUseCasesType } from './../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

export function makeCreateFacultyController({ useCase: facultyUseCasesType }) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase(req.body);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}