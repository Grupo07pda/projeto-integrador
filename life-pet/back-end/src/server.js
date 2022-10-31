
const express = require('express');
const servicoRoute = require('../src/routes/servico.routes')
const usuarioRoute = require('../src/routes/usuario.routes')
const cors = require("cors")
const app = express();
const porta= 3000
require('dotenv/config')

app.use(cors());
app.use(express.json());
app.use(usuarioRoute);
app.use(servicoRoute)



app.listen(porta, ()=>{
    console.log("Deu bom!!!!")
})