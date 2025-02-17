const express = require ("express");
const index = require("./routes/index");
const db = require ("./config/dbConnect.js");
const empreendedoras = require("./routes/empreendedora");
const clientes = require ("./routes/cliente"); // fazer importação de clientes - feito

const app = express ();


app.use (express.json());
app.use("/", index);
app.use("/empreendedoras", empreendedoras);
app.use("/clientes", clientes); //feito endpoint clientes


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

module.exports = app;