import {Request, Response} from "express"
import pgp from "pg-promise"
import {Admin} from "../models/admin"
import dotenv from "dotenv";
dotenv.config();

const connection = {
    connectionString: process.env.DB
}

const db = pgp()(connection);

export class AdminQueries {
    async checkCredentials(req: Request, res: Response, email: string, password: string) {
        try {
            const credCombo: Admin = { email: email, password: password };
            const checkCredentialsCombo = await db.one("SELECT * FROM admin WHERE email = $1 AND password = $2", [credCombo.email, credCombo.password]);
            if (checkCredentialsCombo) {
                return res.status(200).json(checkCredentialsCombo);
            } else {
                return res.status(404).json({ error: "Invalid Credentials." });
            }
        } catch (error) {
            console.error(error);
            return res.status(404).json({ error: "Invalid Credentials." });
        }
    }
}