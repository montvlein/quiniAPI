const tipoConcurso = require('./type')

class sorteo {
    constructor() {
        this.fecha = new Date().toUTCString()
        this.numerosGanadores = null
    }

    sortear() {
        this.numerosGanadores = new numerosGanadores()
    }

}

class numerosGanadores {
    constructor() {
        for (let pos = 1; pos <= 20; pos++) {
            this[pos] = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
        }
    }
}

module.exports = sorteo