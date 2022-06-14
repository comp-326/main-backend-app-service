import { BASE_DIR } from '@exam-cell-config';
import crypto from 'crypto';
import { dirExistSync } from '@exam-cell-utils/fileSystem';
import fs from 'fs';
import gulp from 'gulp';
import os from 'os';
import path from 'path';

function setEnvironmentVariables(envFilePath: string) {
	let filepath = '';

	try {
		filepath = path.join(path.dirname(envFilePath), '.env.example');
	} catch (err) {
		console.log('File does not exist');
		process.exit();
	}
	const environmentPath = path.join(path.dirname(envFilePath), '.env');
	const data: { [x: string]: string } = {};
	fs.readFileSync(filepath, 'utf8')
		.split(os.EOL)
		.forEach((line) => {
			const [k, v] = line.trim().split('=');

			if (k !== '') data[k] = v;
		});

	data['PORT'] = '6200';
	data['SECRET_KEY'] = crypto.randomBytes(64).toString('hex');
	data['REFRESH_KEY'] = crypto.randomBytes(64).toString('hex');
	data['ENC_KEY'] = crypto.randomBytes(64).toString('hex');
	data['APP_NAME'] = 'exam-cell-automaton';
	data['API_PREFIX'] = '/api/v1';
	data['HOST'] = 'localhost';
	data[
		'DATABASE_URL'
	] = `mongodb://localhost:27017/${data['APP_NAME']}dev`;
	data[
		'TEST_DB_URL'
	] = `mongodb://localhost:27017/${data['APP_NAME']}testdb`;

	const envExist = dirExistSync(path.join(path.dirname(envFilePath), '.env'));
	if (envExist) {
		fs.readFileSync(path.join(path.dirname(filepath), '.env'), 'utf8')
			.split(os.EOL)
			.forEach((line) => {
				if (line !== '') {
					const [k, v] = line.trim().split('=');
					if (v !== '') data[k] = v;

					if (!Object.keys(data).includes(k)) data[k] = v;
				}
			});
	}
	const env = Object.entries(data)
		.sort((a, b) => {
			return a[0].localeCompare(b[0]);
		})
		.map(([k, v]) => {
			return k !== '' && `${k}=${v}`;
		});
	const sampleEnvBuffer = Object.entries(data)
		.sort((a, b) => a[0].localeCompare(b[0]))
		.map(([k]) => {
			return `${k}=value`;
		});

	fs.writeFileSync(environmentPath, env.join(os.EOL), 'utf8');
	fs.writeFileSync(
		path.join(path.dirname(envFilePath), '.env.example'),
		sampleEnvBuffer.join(os.EOL),
		'utf8',
	);
}


async function setEnvironmentEnv() {
	return setEnvironmentVariables(path.join(path.dirname(BASE_DIR), '.env.example'));
}

export default gulp.task('env:set', setEnvironmentEnv);