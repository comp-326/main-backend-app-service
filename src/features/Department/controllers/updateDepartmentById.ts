import { DepartmentUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: DepartmentUseCasesType;
};

export function makeUpdateDepartmentByIdController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.editDepartmentByIdUseCase(
				req.params.id,
				req.body,
			);

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
