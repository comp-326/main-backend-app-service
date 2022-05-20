/* eslint-disable @typescript-eslint/no-explicit-any */
import createDirectory from './createDirectory';
import deleteFile from './deleteFile';
import dirExistAsync from './dirExistAsync';
import dirExistSync from './dirExist';

// import { NODE_ENV } from "@backend-service-config"
import setEnvironmentVariables from './envSetup';

export default Object.freeze({
	dirExistAsync,
	dirExistSync,
	createDirectory,
	deleteFile,
	setEnvironmentVariables
});

export {
	dirExistAsync,
	dirExistSync,
	setEnvironmentVariables,
	createDirectory,
	deleteFile
};
