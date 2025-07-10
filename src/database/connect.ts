import getDatabaseConfig from "../config/database.config";
import { DataSource,  DataSourceOptions } from 'typeorm';
class SingletonDatabaseConnection {
    public static async getdatabaseConnection(retry = 0){
        try {
            const databaseSource = new DataSource(
                getDatabaseConfig() as DataSourceOptions,
            );
            await databaseSource.initialize();
            return databaseSource;
        } catch (err) {
            console.log('Error while connecting to the database;')
        }
    }
} export default SingletonDatabaseConnection;