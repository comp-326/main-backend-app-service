"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const dirExist_1 = __importDefault(require("./dirExist"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
function setEnvironmentVariables(envFilePath) {
    let filepath = '';
    try {
        filepath = path_1.default.join(path_1.default.dirname(envFilePath), '.env.example');
    }
    catch (err) {
        console.log('File does not exist');
        process.exit();
    }
    const environmentPath = path_1.default.join(path_1.default.dirname(envFilePath), '.env');
    const data = {};
    fs_1.default.readFileSync(filepath, 'utf8')
        .split(os_1.default.EOL)
        .forEach((line) => {
        const [k, v] = line.trim().split('=');
        if (k !== '')
            data[k] = v;
    });
    data['PORT'] = '6200';
    data['SECRET_KEY'] = crypto_1.default.randomBytes(64).toString('hex');
    data['REFRESH_KEY'] = crypto_1.default.randomBytes(64).toString('hex');
    data['ENC_KEY'] = crypto_1.default.randomBytes(64).toString('hex');
    data['APP_NAME'] = 'exam-cell-automaton';
    data['API_PREFIX'] = '/api/v1';
    data['HOST'] = 'localhost';
    data['DATABASE_URL'] = `mongodb://localhost:27017/${data['APP_NAME']}dev`;
    data['TEST_DB_URL'] = `mongodb://localhost:27017/${data['APP_NAME']}testdb`;
    const envExist = (0, dirExist_1.default)(path_1.default.join(path_1.default.dirname(envFilePath), '.env'));
    if (envExist) {
        fs_1.default.readFileSync(path_1.default.join(path_1.default.dirname(filepath), '.env'), 'utf8')
            .split(os_1.default.EOL)
            .forEach((line) => {
            if (line !== '') {
                const [k, v] = line.trim().split('=');
                if (v !== '')
                    data[k] = v;
                if (!Object.keys(data).includes(k))
                    data[k] = v;
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
        return `${k}=`;
    });
    fs_1.default.writeFileSync(environmentPath, env.join(os_1.default.EOL), 'utf8');
    fs_1.default.writeFileSync(path_1.default.join(path_1.default.dirname(envFilePath), '.env.example'), sampleEnvBuffer.join(os_1.default.EOL), 'utf8');
}
exports.default = setEnvironmentVariables;

//# sourceMappingURL=envSetup.js.map
