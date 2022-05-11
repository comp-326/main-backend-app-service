import fs from 'fs';
/**
 *Check for path existance
 */
const dirExistAsync = async (path: string) => {
	let exist = false;
	fs.access(path, async err => {
		if (err) 
			exist = false;
		else 
			exist = true;
		
	});

	return exist;
};

export default dirExistAsync;
