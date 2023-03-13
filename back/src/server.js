const express = require('express');
const server = express();
const cors = require('cors');
const PORT = 3001;
const router = require('./routes/index');
const favsRouter = require('./routes/favsRouter');
const morgan = require('morgan')

//middleware
server.use(express.json()); //leer json
server.use(cors()); // desbloquear la app que no tra los pjy los blockea, uso el middleware cors
server.use(morgan("dev"))
server.use('/rickandmorty', router);
server.use('/favs', favsRouter)

//inicio del servers
server.listen(PORT, () => {
    console.log(`server en el puerto ${PORT}`);
});