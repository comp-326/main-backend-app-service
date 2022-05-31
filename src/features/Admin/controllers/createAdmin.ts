import { adminUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: adminUseCasesType
}

export function makeCreateAdminController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase.addNewAdminUseCase(req.body);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}
