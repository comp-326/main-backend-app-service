import { StudentUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: StudentUseCasesType
}

export function makeFindStudentsController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase.listStudentsUseCase();

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}