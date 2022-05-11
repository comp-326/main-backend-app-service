import path from 'path';
import { setEnvironmentVariables } from './utils/fileSystem';

// eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
const env_path = path.join(path.join(__dirname), '..', '.env.example');

const buildVariables = () => {
	setEnvironmentVariables(env_path);
};

buildVariables();
