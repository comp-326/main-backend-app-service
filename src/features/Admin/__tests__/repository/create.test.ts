import adminModel from '@exam-cell-features/Admin/models';
import repo from './../../repository';

describe('first', () => {
	it('Should create an admin user', async () => {
		try {
			const d = await repo.createNewAdmin({
				model: adminModel,
			})({
				email: 'janeDoe@gmail.com',
				password: 'TestAdmin@pass1234',
				role: '62867c9882c5e09e4908f4b6',
			});
			expect(d).toMatchInlineSnapshot(`
			Object {
			  "__v": 0,
			  "_id": "6297cbf00442d1762c0b4fa3",
			  "email": "janeDoe@gmail.com",
			  "password": "TestAdmin@pass1234",
			  "role": "62867c9882c5e09e4908f4b6",
			}
		`);
		} catch (e) {
			expect(e).toBeDefined();
			expect(e.message).toMatchInlineSnapshot(
				'"E11000 duplicate key error collection: exam-cell-automatontestdb.admins index: email_1 dup key: { email: \\"janeDoe@gmail.com\\" }"',
				'"Operation `admins.insertOne()` buffering timed out after 10000ms"',
			);
			expect(e).toMatchInlineSnapshot(
				'[MongoServerError: E11000 duplicate key error collection: exam-cell-automatontestdb.admins index: email_1 dup key: { email: "janeDoe@gmail.com" }]',
				'[MongooseError: Operation `admins.insertOne()` buffering timed out after 10000ms]',
			);
		}
	});
	it('Should create an admin user', async () => {
		try {
			const d = await repo.createNewAdmin({
				model: adminModel,
			})({
				email: 'janeDoe@gmail.com',
				password: 'TestAdmin@pass1234',
				role: '62867c9882c5e09e4908f4b6',
			});
			expect(d).toMatchInlineSnapshot(`
			Object {
			  "__v": 0,
			  "_id": "6297cbf00442d1762c0b4fa6",
			  "email": "janeDoe@gmail.com",
			  "password": "TestAdmin@pass1234",
			  "role": "62867c9882c5e09e4908f4b6",
			}
		`);
		} catch (e) {
			expect(e).toBeDefined();
			expect(e.message).toMatchInlineSnapshot(
				'"E11000 duplicate key error collection: exam-cell-automatontestdb.admins index: email_1 dup key: { email: \\"janeDoe@gmail.com\\" }"',
				`"Admin validation failed: lastName: Path \`lastName\` is required., firstName: Path \`firstName\` is required., role: Path \`role\` is required."`,
			);
			expect(e).toMatchInlineSnapshot(
				'[MongoServerError: E11000 duplicate key error collection: exam-cell-automatontestdb.admins index: email_1 dup key: { email: "janeDoe@gmail.com" }]',
				`[ValidationError: Admin validation failed: lastName: Path \`lastName\` is required., firstName: Path \`firstName\` is required., role: Path \`role\` is required.]`,
			);
		}
	});

	it('Should not create an admin user', async () => {
		try {
			await repo.createNewAdmin({
				model: adminModel,
			})({
				email: 'janeDoe@gmail.com',
				password: 'TestAdmin@pass1234',
				role: '62867c9882c5e09e4908f4b',
			});
		} catch (e) {
			expect(e).toMatchInlineSnapshot(
				'[ValidationError: Admin validation failed: role: Cast to ObjectId failed for value "62867c9882c5e09e4908f4b" (type string) at path "role" because of "BSONTypeError"]',
				`[ValidationError: Admin validation failed: lastName: Path \`lastName\` is required., firstName: Path \`firstName\` is required., role: Path \`role\` is required.]`,
			);
		}
	});
	it('Should not create an admin user', async () => {
		try {
			await repo.createNewAdmin({
				model: adminModel,
			})({
				email: '',
				password: '',
				role: '62867c9882c5e09e4908f4b',
			});
		} catch (e) {
			expect(e).toMatchInlineSnapshot(
				'[ValidationError: Admin validation failed: role: Cast to ObjectId failed for value "62867c9882c5e09e4908f4b" (type string) at path "role" because of "BSONTypeError", email: Path `email` is required., password: Path `password` is required.]',
				`[ValidationError: Admin validation failed: lastName: Path \`lastName\` is required., firstName: Path \`firstName\` is required., email: Path \`email\` is required., password: Path \`password\` is required.]`,
			);
		}
	});
	it('Should not create an admin user', async () => {
		try {
			await repo.createNewAdmin({
				model: adminModel,
			})({
				email: '',
				password: '',
				role: '62867c9882c5e09e4908f4b4',
			});
		} catch (e) {
			expect(e).toMatchInlineSnapshot(
				'[ValidationError: Admin validation failed: email: Path `email` is required., password: Path `password` is required.]',
				`[ValidationError: Admin validation failed: lastName: Path \`lastName\` is required., firstName: Path \`firstName\` is required., email: Path \`email\` is required., password: Path \`password\` is required.]`,
			);
		}
	});
});
