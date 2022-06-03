import { StudentUseCasesType } from '../use-cases';
import { generateRandomPassword } from '@exam-cell-helpers/generateRandomPassword';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: StudentUseCasesType;
};

export function makeCreateStudentController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			req.body.password = generateRandomPassword({
				lower: 3,
				upper: 3,
				num: 3,
				symb: 3,
			});
			const data = await useCase.addNewStudentUseCase(req.body);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}
