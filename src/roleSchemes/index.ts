import { environmentConfig } from '@exam-cell-config';
import userRoleModel from '@exam-cell-features/userRoles/models';

class RoleMigrator {

	private migrateUserPermissions = async () => {
		await userRoleModel.InsertRoles();

	};

	migrate = async () => {
		await this.migrateUserPermissions();
		console.log(`Role migration successful----${environmentConfig.NODE_ENV}`);
	};

}
const migrate = new RoleMigrator().migrate;

export { migrate as migrateRole };
