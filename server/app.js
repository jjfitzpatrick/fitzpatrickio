const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';

app.get("/", (req, res) => res.send("Welcome to fitzpatrick.io"));

app.listen(port, ip, () => console.log(`App listening on ${ip}:${port}!`));