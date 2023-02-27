import express, { Application, Request, Response } from "express";

const app:Application = express();

const hostName:string = "127.0.0.1";
const port:number = 9999;

app.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "Welcome to express server"
    });
});

app.get("/users", (request:Request, response:Response) => {
    response.status(200);
    response.json([{id : "AA010", name : "Rajan", designation : "Software Engineer"}]);
});

app.get("/todos", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "I am from todos data"
    });
});

app.listen(port, hostName, () => {
    console.log(`Express server is started at http://${hostName}:${port}`);
});