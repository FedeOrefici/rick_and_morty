const { Router } = require('express');
const {favs} = require('../util/favs')
const favsRouter = Router();

favsRouter.post('/create', (req, res) => {
    favs.push({...req.body})
    res.status(201).json({msg: 'Agregado ok', data: favs})
});

favsRouter.get('/get', (req, res) => {
    return res.json(favs)
});

favsRouter.delete('/delete', (req, res) => {
    const {id} = req.params;
    favs.filter(pj => pj.id !== Number(id));
    return res.status(200).json({msg: "Deleted", data: favs})
})

module.exports = favsRouter;