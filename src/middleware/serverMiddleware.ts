import express,{ Application } from "express";
import cookieParser from 'cookie-parser';
export async function serverMiddleware(app: Application) {
    //app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
    
}