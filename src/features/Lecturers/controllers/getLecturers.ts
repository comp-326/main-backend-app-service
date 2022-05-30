import { lecturerUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: lecturerUseCasesType;
};

export function makeGetLecturersController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.listLecturersUseCase();

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
