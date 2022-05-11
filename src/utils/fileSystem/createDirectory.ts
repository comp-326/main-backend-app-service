import fs from 'fs';

/**
 * if file/path does not exist, create file/path
 */
const createDirectory = async (path: string) => {
	if (!fs.existsSync(path)) 
		fs.mkdirSync(path, { recursive: true });
	
};

export default createDirectory;
