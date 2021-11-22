require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DB"))

app.use(express.json());

const usuariosRouter = require("./routes/usuarios");
app.use("/usuarios", usuariosRouter);

const solarSystemRouter = require("./routes/solarSystem");
app.use("/solarSystem", solarSystemRouter);


app.listen(port, () => console.log("Server Started"));