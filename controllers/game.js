const sorteo = require('./../models/game')
const historyCrtl = require('./history')

function newGame() {
    let game = new sorteo()
    game.sortear()
    historyCrtl.addGame(game)
}

module.exports = newGame