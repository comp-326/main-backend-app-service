import { unitModelType } from '../models';

type Props = {
	unitModel: unitModelType;
};

export function findUnitById({ unitModel }: Props) {
	return async (unitId: string) => {
		const unit = await unitModel.findById(unitId);

		return unit;
	};
}
