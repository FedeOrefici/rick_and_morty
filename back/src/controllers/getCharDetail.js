const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharDetail = async (req, res) => {

    const { detailId  } = req.params;

    if(detailId) {
        try {
            const response = await axios(URL + detailId)
            const character = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender,
                origin: response.data.origin.name,
                status: response.data.status,
            };
            return res.status(200).json(character)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    } else {
        return res.status(500).send('Only 1 ID per parameter');
    };












}
module.exports = {getCharDetail};