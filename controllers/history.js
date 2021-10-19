const path = require('path')
const pathHistory = `${path.dirname(__dirname)}/data/history.json`
const history = require('./../data/history.json')
const fs = require('fs')

function getAll(req, res) {
    try {
        res
        .header("Access-Control-Allow-Origin", "*")
        .status(200)
        .send({ history })
    }
    catch(err) {
        res.status(500).send(err)
    }
}

function getLast(req, res){
    let last = history[history.length-1]
    try {
        res
        .header("Access-Control-Allow-Origin", "*")
        .status(200)
        .send({ last })
    }
    catch(err) {
        res.status(500).send(err)
    }
}

function getByDate(req, res) {
    let finded = history.find(game => game.data = req.params.date)
    try {
        res
        .header("Access-Control-Allow-Origin", "*")
        .status(200)
        .send({ finded })
    }
    catch(err) {
        res.status(500).send(err)
    }
}

function addGame(game){
    history.push(game)
    fs.writeFileSync(pathHistory,JSON.stringify(history))
}

module.exports = {
    getAll,
    getLast,
    getByDate,
    addGame
}
