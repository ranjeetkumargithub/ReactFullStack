import express, { Application, Request, Response } from "express";
import userRouter from "./router/userRouter";
import adminRouter from "./router/adminRouter";
import productRouter from "./router/productRouter";

const app:Application = express();

const hostName:string = "127.0.0.1";
const port:number = 9999;

// configure express to read the form data
app.use(express.json());

app.get("/", (request:Request, response:Response) => {
    response.status(200);
    response.json({
        msg : "Welcome to express server"
    });
});

// configure the routers
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/products", productRouter);


app.listen(port, hostName, () => {
    console.log(`Express server is started at http://${hostName}:${port}`);
});