import { environmentConfig } from '@exam-cell-config';
import knex from 'knex';
import config, { knexEnvType } from '@exam-cell/knexfile';

type Env = keyof knexEnvType

const oracleConnection = knex(config[environmentConfig.NODE_ENV as Env]);

export default oracleConnection;

export { oracleConnection };