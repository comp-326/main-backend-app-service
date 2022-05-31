import { IUnit } from '../models/interfaces';
import { unitModelType } from '../models';

type Props = {
	unitModel: unitModelType;
};

export function updateUnitById({ unitModel }: Props) {
	return async (unitId: string, unitData: IUnit) => {
		const unit = await unitModel.findByIdAndUpdate(unitId, unitData, {
			new: true,
		});

		return unit;
	};
}
