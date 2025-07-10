import { DataSourceOptions } from "typeorm";
import { getEnvVar } from "../utils/env.utils";

function getDatabaseConfig():DataSourceOptions {
    return {
        type: 'postgres',
        port: Number(getEnvVar('DB_PORT')),
        host: getEnvVar("DB_HOST"),
        password: getEnvVar("DB_PASSWORD"),
        database: getEnvVar("DB_NAME"),
        entities: [],
        username: getEnvVar("DB_USERNAME"),
        synchronize: true,
    logging: false,
    }
}













export default getDatabaseConfig;