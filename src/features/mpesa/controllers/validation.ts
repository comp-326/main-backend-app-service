import { MpesaUseCasesType } from '../useCases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: MpesaUseCasesType;
};

export function makeMpesaValidationController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase.mpesaValidationUseCase(req.body);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}
