import { StudentUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: StudentUseCasesType;
};

export function makeUpdateStudentByIdController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.editStudentByIdUseCase(
				req.params.id,
				req.body,
			);

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
