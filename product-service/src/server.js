require('dotenv').config();
import express from "express";
import models from "./infrastructure/db/models";
import baseRouter from "./infrastructure/web/routes";

const app = express();
app.use(express.json());
app.use("/api", baseRouter);

models.sequelize.sync({ force: false })
.then((res) => {
    app.listen(5050, () => { console.log("Connected")}); 
}).catch((err) => {
    console.error(err);
})

export default app
