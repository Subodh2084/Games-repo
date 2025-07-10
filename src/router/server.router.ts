import { Application } from "express";
import authRouter from "./auth.router";

async function serverRouter(app: Application) {
    app.use("/api/v1", [authRouter])





}    export default serverRouter;