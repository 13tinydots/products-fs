import express from "express";
import config from "./config.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
