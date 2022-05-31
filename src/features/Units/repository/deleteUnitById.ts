import { unitModelType } from '../models';

type Props = {
	unitModel: unitModelType;
};

export function deleteUnitById({ unitModel }: Props) {
	return async (unitId: string) => {
		const unit = await unitModel.findByIdAndUpdate(
			unitId,
			{
				$set: {
					isDeleted: true,
				},
			},
			{
				new: true,
			},
		);

		return unit;
	};
}
