const tipoConcurso = require('./type')

class sorteo {
    constructor() {
        this.fecha = new Date()
        this.tipo = this.tipo(this.fecha).nombre
        this.numerosGanadores = null
    }

    sortear() {
        this.numerosGanadores = new numerosGanadores()
    }

    tipo(hora) {
        return tipoConcurso.find(tipo => tipo.horario === `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`)
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