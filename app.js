const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express()


const port = process.env.PORT;
app.use(express.static('public'));

//hndlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {

});


app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Franco Encañada',
        titulo: 'Curso-Nodejs'
    });
})

app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html')
    res.render('generic',{
        nombre: 'Franco Encañada',
        titulo: 'Curso-Nodejs'
    });
})

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/elements.html')
    res.render('elements',{
        nombre: 'Franco Encañada',
        titulo: 'Curso-Nodejs'
    });
})



app.get('/*', (req, res) => {
    res.send('404')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})