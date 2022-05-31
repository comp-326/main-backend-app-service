import { DepartmentUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: DepartmentUseCasesType
}

export function makeFindDepartmentByIdController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase.addNewDepartmentUseCase(req.body);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}