import "reflect-metadata";
import "./config/config.ts";

import express from 'express';
import { AppDataSource } from "./config/db.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function startApp() {
    try {
        AppDataSource.initialize()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`[server]: Сервер запущен на http://localhost:${PORT}`);
            });
        })
        .catch((e) => {
            console.log(e);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();
