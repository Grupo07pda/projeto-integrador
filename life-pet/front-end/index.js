const express = require('express');
const app = express();
const cors = require('cors');
const porta = 4000;

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname+'/public/'));


app.get('/',(req, res) =>{
    res.render('pages/index')
});


app.get('/login',(req, res) =>{
    res.render('pages/login')
});

app.get('/servicos',(req, res) =>{
    res.render('pages/servicos')
});


app.get('/agendamento',(req, res) =>{
    res.render('pages/agendamento')
});

app.get('/perfil',(req, res) =>{
    res.render('pages/perfil')
});

app.listen(porta,(req, res) => {
    console.log(`Servidor funcionando: ${porta}`)
})