import { courseUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: courseUseCasesType;
};

export function makeCreateNewCourseController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const course = await useCase.addNewCourseUseCase(req.body);

			return res.status(200).json({ data: course });
		} catch (error) {
			return next(error);
		}
	};
}
