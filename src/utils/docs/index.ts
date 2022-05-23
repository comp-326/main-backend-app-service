import path from 'path';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';
import { BASE_DIR, environmentConfig } from '@exam-cell-config';

const swaggerDocument =
	environmentConfig.NODE_ENV === 'development'
		? yaml.load(path.join(BASE_DIR, 'swagger-docs/api.yml'))
		: null;

const options = {
	explorer: true,
	customSiteTitle: 'ExamCellAutomaton app API',
};

const swaggerSetup = swaggerUI.setup(swaggerDocument, options);
const swaggerServe = swaggerUI.serve;

export default Object.freeze({ swaggerServe, swaggerSetup });

export { swaggerServe, swaggerSetup };
