const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = async (req, res) => {

    const { id } = req.params;

    try {
        const response = await axios(URL + id)
        const character = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender
            };
            
        res.status(200).json(character);
        
    } catch (error) {
        res.status(500).json(error.message);
    };
};

module.exports = {getCharById}; 