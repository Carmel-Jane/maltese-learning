const express = require('express');
const app = express();
const apiRouter = require("./routers/api.router");
const cors = require('cors');
const { handlePsqlErrors, handleCustomErrors, handleServerErrors } = require("./errors");

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.use((request, response) => {
    response.status(404).send({ msg: "404 Error. This page doesn't exist" });
  });
  
  app.use(handlePsqlErrors);
  app.use(handleCustomErrors);
  app.use(handleServerErrors);
  

module.exports = app;
