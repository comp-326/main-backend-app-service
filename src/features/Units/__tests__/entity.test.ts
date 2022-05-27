import { createUnitEntity } from '../entities';

describe('Create unit', () => {
	it('Should create a new unit', async () => {
		// try{
		const unit = createUnitEntity({
			name: 'Data structures and Algorithms',
			faculty: '628a6f1509bd82ed32a01a5e',
			department: '62867c9882c5e09e4908f4b6',
			unitCode: 'CSC101',
		});
		expect(unit).toBeDefined();
		expect(unit.getName()).toBe('Data structures and Algorithms');
		expect(unit.getFaculty()).toBe('628a6f1509bd82ed32a01a5e');
		expect(unit.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
	});
});
