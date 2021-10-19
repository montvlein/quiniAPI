const tipoConcurso = require('../models/type');
const sorteo = require('./../models/game')
const historyCrtl = require('./history')

function newGame() {
    let game = new sorteo()
    game.sortear()
    tipoConcurso.forEach(tipo => {
        if (tipo.horario === `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`) {
            game.tipo = tipo.nombre
            historyCrtl.addGame(game)
        }
    })
    return game
}

module.exports = newGame