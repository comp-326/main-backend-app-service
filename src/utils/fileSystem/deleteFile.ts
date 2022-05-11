/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

/**
 *Delete file/path
 */
const deleteFile = async (path: string) => {
	if (!fs.existsSync(path)) {
		try {
			fs.unlinkSync(path);
		} catch (error: any) {
			console.log(error.message);
		}
	}
};

export default deleteFile;
