import { createCourseEntity } from '../entities';

describe('create course', () => {
	it('Should create a new course', async () => {
		const course = createCourseEntity({
			code: 'CSC101',
			name: 'Computer Science',
			department: '62867c9882c5e09e4908f4b6',
			faculty: '62867c9882c5e09e4908f4b6',
		});
		expect(course).toBeDefined();
		expect(course.getCode()).toBe('CSC101');
		expect(course.getName()).toBe('Computer Science');
		expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		expect(course.getFaculty()).toBe('62867c9882c5e09e4908f4b6');
	});
	it('Should not create a new course', async () => {
		try {
			const course = createCourseEntity({
				code: 'CSC101',
				name: 'Computer Science',
				department: '62867c9882c5e09e4908f4b6',
				faculty: '',
			});
			expect(course).toBeDefined();
			expect(course.getCode()).toBe('CSC101');
			expect(course.getName()).toBe('Computer Science');
			expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		} catch (e) {
			expect(e).toBeDefined();
		}
	});
	it('Should not create a new course', async () => {
		try {
			const course = createCourseEntity({
				code: '',
				name: 'Computer Science',
				department: '',
				faculty: '62867c9882c5e09e4908f4b6',
			});
			expect(course).toBeDefined();
			expect(course.getCode()).toBe('CSC101');
			expect(course.getName()).toBe('Computer Science');
			expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		} catch (e) {
			expect(e.message).toBe('Course code is required');
		}
	});
	it('Should not create a new course', async () => {
		try {
			const course = createCourseEntity({
				code: 'CSC101',
				name: '',
				department: '',
				faculty: '62867c9882c5e09e4908f4b6',
			});
			expect(course).toBeDefined();
			expect(course.getCode()).toBe('CSC101');
			expect(course.getName()).toBe('Computer Science');
			expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		} catch (e) {
			expect(e.message).toBe('Course name is required');
		}
	});
	it('Should not create a new course', async () => {
		try {
			const course = createCourseEntity({
				code: 'CSC101',
				name: 'Computer Science',
				department: '',
				faculty: '62867c9882c5e09e4908f4b6',
			});
			expect(course).toBeDefined();
			expect(course.getCode()).toBe('CSC101');
			expect(course.getName()).toBe('Computer Science');
			expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		} catch (e) {
			expect(e.message).toBe('Course department is required');
		}
	});
	it('Should not create a new course', async () => {
		try {
			const course = createCourseEntity({
				code: 'CSC101',
				name: 'Computer Science',
				department: 'some-department',
				faculty: '62867c9882c5e09e4908f4b6',
			});
			expect(course).toBeDefined();
			expect(course.getCode()).toBe('CSC101');
			expect(course.getName()).toBe('Computer Science');
			expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		} catch (e) {
			expect(e.message).toBe('Course department is invalid');
		}
	});
	it('Should not create a new course', async () => {
		try {
			const course = createCourseEntity({
				code: 'CSC101',
				name: 'Computer Science',
				department: '62867c9882c5e09e4908f4b6',
				faculty: '',
			});
			expect(course).toBeDefined();
			expect(course.getCode()).toBe('CSC101');
			expect(course.getName()).toBe('Computer Science');
			expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		} catch (e) {
			expect(e.message).toBe('Course faculty is required');
		}
	});
	it('Should not create a new course', async () => {
		try {
			const course = createCourseEntity({
				code: 'CSC101',
				name: 'Computer Science',
				department: '62867c9882c5e09e4908f4b6',
				faculty: 'some-faculty',
			});
			expect(course).toBeDefined();
			expect(course.getCode()).toBe('CSC101');
			expect(course.getName()).toBe('Computer Science');
			expect(course.getDepartment()).toBe('62867c9882c5e09e4908f4b6');
		} catch (e) {
			expect(e.message).toBe('Course faculty is invalid');
		}
	});
});
