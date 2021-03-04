import express from "express";
import { postProduct } from "./controllers";
import makeCallback from "./infrastructure/web";

const app = express();
app.use(express.json());
app.post("/",makeCallback(postProduct));

app.listen(5050, () => {
    console.log("Connected")
})

export default app
