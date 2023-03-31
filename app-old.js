

const http = require('http');

const server = http.createServer((req, res) => {


    res.write('Hola mundo');
    res.end();

})
.listen(8080);


console.log('esuchando el puerto');