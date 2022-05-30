import { createUnitEntity } from '../entities';

describe('Create unit', () => {
	it('Should create a new unit', async () => {
		// try{
		const unit = createUnitEntity({
			department: '62867c9882c5e09e4908f4b6',
			name: 'Unit 1',
			faculty: '62867c9882c5e09e4908f4b6',
			semester: 1,
			unitCode: 'CS101',
			year: 1,
		});
		expect(unit).toBeDefined();
		expect(unit.getName()).toMatchInlineSnapshot('"Unit 1"');
		expect(unit.getFaculty()).toMatchInlineSnapshot(
			'"62867c9882c5e09e4908f4b6"',
		);
		expect(unit.getDepartment()).toMatchInlineSnapshot(
			'"62867c9882c5e09e4908f4b6"',
		);
	});
});
