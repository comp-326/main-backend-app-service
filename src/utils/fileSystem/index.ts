/* eslint-disable @typescript-eslint/no-explicit-any */
import createDirectory from './createDirectory';
import deleteFile from './deleteFile';
import dirExistAsync from './dirExistAsync';
import dirExistSync from './dirExist';

// import { NODE_ENV } from "@exam-cell-config"

export default Object.freeze({
	dirExistAsync,
	dirExistSync,
	createDirectory,
	deleteFile
});

export {
	dirExistAsync,
	dirExistSync,
	createDirectory,
	deleteFile
};
