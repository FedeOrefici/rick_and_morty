const http = require('http');
const characters = require('./src/utils/data.js')
const port = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split('/').at(-1);
        let filterCharacter = characters.filter((char) => char.id === Number(id));
        res.writeHead(200, {"Content-type" : "application/json"}).end(JSON.stringify(filterCharacter));
    }
}).listen(port, 'localhost');

