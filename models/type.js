const tipoConcurso = [
    {
        nombre: 'Primera',
        horario: '12:0:0'
    },
    {
        nombre: 'Matutina',
        horario: '15:0:0'
    },
    {
        nombre: 'Vespertina',
        horario: '17:30:0'
    },
    {
        nombre: 'Nocturna',
        horario: '21:0:0'
    },
    {
        nombre: 'Test',
        horario: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    }
]

module.exports = tipoConcurso