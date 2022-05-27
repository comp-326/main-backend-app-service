import { createDeparmentEntity } from '../entities';

describe('create department', () => {
	it('Should create a new department', async () => {
		const department =  createDeparmentEntity({
			name: 'Computer Science',
			faculty: '62867c9882c5e09e4908f4b6',
		});
		expect(department.getFaculty()).toBe('62867c9882c5e09e4908f4b6');
		expect(department.getName()).toBe('Computer Science');
	});
	it('Should not create a new department', async () => {
		try {
			const department =  createDeparmentEntity({
				name: '',
				faculty: '62867c9882c5e09e4908f4b6',
			});
			expect(department.getFaculty()).toBe('62867c9882c5e09e4908f4b6');
			expect(department.getName()).toBe('Computer Science');
		} catch (e) {
			expect(e).toBeDefined();
		}
	});
	it('Should not create a new department', async () => {
		try {
			const department =  createDeparmentEntity({
				name: '',
				faculty: '62867c9882c5e09e4908f4b6',
			});
			expect(department.getFaculty()).toBe('62867c9882c5e09e4908f4b6');
			expect(department.getName()).toBe('Computer Science');
		} catch (e) {
			expect(e.message).toBe('Department name is required');
		}
	});
	it('Should not create a new department', async () => {
		try {
			const department =  createDeparmentEntity({
				name: 'Computer Science',
				faculty: '',
			});
			expect(department.getFaculty()).toBe('62867c9882c5e09e4908f4b6');
			expect(department.getName()).toBe('Computer Science');
		} catch (e) {
			expect(e.message).toBe('Department faculty is required');
		}
	});
	it('Should not create a new department', async () => {
		try {
			const department =  createDeparmentEntity({
				name: 'Computer Science',
				faculty: 'some-faculty',
			});
			expect(department.getFaculty()).toBe('62867c9882c5e09e4908f4b6');
			expect(department.getName()).toBe('Computer Science');
		} catch (e) {
			expect(e.message).toBe('Department faculty is invalid');
		}
	});
});
