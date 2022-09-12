const prompt = require('prompt-sync')()

const segundosString  = prompt ('quantos segundos durou o evento?')
const segundos = Number (segundosString)

const horas = (segundos/3600)
const minutos = (segundos%3600)/60
const seconds = (segundos%3600)%60

console.log(`O evento durou ${horas} horas, ${minutos} minutos, segundos ${seconds}`)

