import knex from "knex";
import config, { knexEnvType } from "@exam-cell/knexfile"
import { environmentConfig } from "@exam-cell-config"

type Env = keyof knexEnvType

const sqliteConnection = knex(config[environmentConfig.NODE_ENV as unknown as Env]);

export default sqliteConnection
export { sqliteConnection }