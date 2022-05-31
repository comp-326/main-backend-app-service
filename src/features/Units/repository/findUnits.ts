import { unitModelType } from '../models';

type Props = {
	unitModel: unitModelType;
};

export function findUnits({ unitModel }: Props) {
	return async () => {
		const units = await unitModel.find({});

		return units;
	};
}
