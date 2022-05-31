import { unitUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: unitUseCasesType;
};

export function makeDeleteUnitByIdController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.removeUnitByIdUseCase(req.params.id);

			return res.status(200).json({ data: response });
		} catch (error) {
			return next(error);
		}
	};
}
