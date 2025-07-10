import express, { Router } from "express"

import { Request,Response } from "express-serve-static-core";
const authRouter = Router();
authRouter.get("/auth", (req: Request, res: Response) => res.send("Hello"))




export default authRouter;