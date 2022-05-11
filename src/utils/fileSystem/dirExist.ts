import fs from 'fs';
/**
 *Check for file existance
 */
const dirExistSync = (path: string) => {
	return fs.existsSync(path);
};

export default dirExistSync;
