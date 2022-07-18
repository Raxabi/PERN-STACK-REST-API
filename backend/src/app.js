import express from "express";

// Import config files
import "./database/db.js";

// Import routes files
import router from "./routes/index.routes.js"

const {pathname: root} = new URL("./", import.meta.url);
const __dirname = root.replace("/", "")

const app = express();
app.use(express.json({}))
app.use(router);
app.set("view engine", "ejs");
app.set("views", __dirname + "views/pages/")

export default app;