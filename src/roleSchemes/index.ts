import { environmentConfig } from '@backend-service-config';
import userRoleModel from '@backend-service/features/userRoles/models';

class RoleMigrator {

	private migrateUserPermissions = async () => {
		await userRoleModel.InsertRoles();

	};
	migrate = async () => {
		await this.migrateUserPermissions();
		console.log(`Role migration successful----${environmentConfig.NODE_ENV}`);
	};

}
(async () => {
	const roleMigrator = new RoleMigrator();
	await roleMigrator.migrate();
	setTimeout(() => {
		process.exit(0);
	}, 3000);
})();


