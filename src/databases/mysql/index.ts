import knex from "knex";
import config, { knexEnvType } from "@exam-cell/knexfile"
import { environmentConfig } from "@exam-cell-config"

type Env = keyof knexEnvType

const mysqlConection = knex(config[environmentConfig.NODE_ENV as unknown as Env]);

export default mysqlConection
export { mysqlConection }