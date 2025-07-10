import express, { Express } from "express";
import { DataSource, DataSourceOptions } from 'typeorm';
import { getEnvVar } from "./utils/env.utils";
import { serverMiddleware } from "./middleware/serverMiddleware";
import serverRouter from "./router/server.router";
import SingletonDatabaseConnection from "./database/connect";
export class Server{
    private static instance: Server;
    private port: number= parseInt(getEnvVar("PORT") as string, 10) || 3000;
    private app: Express=express();
    private constructor() {
         //this.app = express();
        
        
    }
    public static getInstance(): Server{
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance
    }
    public async setupMiddleware(): Promise<void>
    {
        await serverMiddleware(this.app);
    }
    public async setupRoutes(): Promise<void>
    {
        await serverRouter(this.app);
    }
    public async connectDatabase() {
        await SingletonDatabaseConnection.getdatabaseConnection();
    }
    public async start():Promise<void> {
        try {
            await this.setupMiddleware();
            await this.setupRoutes();
            await this.connectDatabase();
            console.log("Database Connected Sucessfully");
            
            this.app.listen(this.port, () => { console.log(`Server is running on port ${this.port}`) })
        } catch (err) {
            console.log(`Server failed starting at port ${this.port}`)
        }
        }
    }
