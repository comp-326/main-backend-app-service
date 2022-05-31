import { DepartmentUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: DepartmentUseCasesType;
};

export function makeFindDepartmentByNameController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.listDepartmentByNameUseCase(
				req.query.email as string,
			);

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
