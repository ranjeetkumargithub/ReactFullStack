import express, { Application, Request, Response } from "express";
import albumRouter from "./router/albumRouter";
import commentRouter from "./router/commentRouter";
import photoRouter from "./router/photoRouter";
import postRouter from "./router/postRouter";
import todoRouter from "./router/todoRouter";
import userRouter from "./router/userRouter";

const app:Application = express();

const hostName:string = "127.0.0.1";
const port:number = 9999;

app.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "Welcome to express server"
    });
});

// configure routers
app.use("/albums", albumRouter);
app.use("/users", userRouter);
app.use("/todos", todoRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/photos", photoRouter);


app.listen(port, hostName, () => {
    console.log(`Express server is started at http://${hostName}:${port}`);
});