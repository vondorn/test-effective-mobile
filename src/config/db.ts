import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/user.model.ts";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    synchronize: true,
    logging: true,
    entities: [User], 
    migrations: [],
    subscribers: [],
});