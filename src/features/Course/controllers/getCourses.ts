import { courseUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: courseUseCasesType;
};

export function makeGetCoursesController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const courses = await useCase.listCoursesUseCase();

			return res.status(200).json({ data: courses });
		} catch (error) {
			return next(error);
		}
	};
}
