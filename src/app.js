/* This code is setting up an Express server in Node.js. */
const express = require('express');

const app = express();

app.get("/", (requisicao, resposta) => resposta.status(200).json({ mensagem: "Olá Mundo!" }));

module.exports = app;
