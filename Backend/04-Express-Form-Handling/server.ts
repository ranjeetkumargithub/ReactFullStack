import express, { Application, Request, Response } from "express";
import userRouter from "./router/userRouter";
import dotenv from "dotenv";

const app:Application = express();


// configure express to read the form data
app.use(express.json());

// configure dot-env
dotenv.config({path : "./.env"});

const hostName:string|undefined = process.env.EXPRESS_SERVER_HOST;
const port:string|undefined = process.env.EXPRESS_SERVER_PORT;

app.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "Welcome to express server"
    });
});

// configure the routers
app.use("/users", userRouter);

if(port && hostName){
    app.listen(Number(port), hostName, () => {
        console.log(`Express server is started at http://${hostName}:${port}`);
    });
}
