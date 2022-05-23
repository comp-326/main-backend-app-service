import knex from "knex";
import config from "@exam-cell/knexfile"
import { environmentConfig } from "@exam-cell-config"

const pgLog = {
    log: {
        warn: (message: any) => {
            console.log(message);

        },
        debug: (message: any) => {
            console.log(message);

        },
        error: (message: any) => {
            console.log(message);

        }
    }
}

const pgConnection = knex({
    ...config[environmentConfig.NODE_ENV],
    log: pgLog.log
});


export default pgConnection
export { pgConnection }