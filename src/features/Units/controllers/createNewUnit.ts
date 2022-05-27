import { unitUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
  useCase: unitUseCasesType;
};

export function makeCreateNewUnitController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const deparment = await useCase(req.body);

			return res.status(200).json({ data: deparment });
		} catch (error) {
			return next(error);
		}
	};
}
