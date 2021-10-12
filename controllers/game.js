const tipoConcurso = require('../models/type');
const sorteo = require('./../models/game')
const historyCrtl = require('./history')

function newGame() {
    tipoConcurso.forEach(tipo => {
        if (tipo.horario === `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`) {
            let game = new sorteo()
            game.sortear()
            historyCrtl.addGame(game)
        }
    })
}

module.exports = newGame