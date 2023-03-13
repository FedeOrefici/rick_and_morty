const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharDetail = (req, res) => {

    const { detailId  } = req.params;

        axios(URL + detailId)
        .then( ({data}) => {
            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                image: data.image,
                gender: data.gender,
                status: data.status,
                origin: data.origin.name
            };
            return res.status(200).json(character)
        });
        
        (err) => {
            res.status(404).json(err.message)
        };

    }

module.exports = {getCharDetail};