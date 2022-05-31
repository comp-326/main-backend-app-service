import { adminUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: adminUseCasesType;
};

export function makeGetAdminsController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.listAdminsUseCase();

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
