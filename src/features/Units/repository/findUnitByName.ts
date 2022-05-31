import { unitModelType } from '../models';

type Props = {
	unitModel: unitModelType;
};

export function findUnitByName({ unitModel }: Props) {
	return async (name: string) => {
		const unit = await unitModel.findOne({name});

		return unit;
	};
}
