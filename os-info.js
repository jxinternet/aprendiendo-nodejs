import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del Sistema Operativo: ')
console.log('-----------------------------------')

console.log('Nombre del Sistema: ', platform())
console.log('Versión del Sistema: ', release())
console.log('Arquirectura: ', arch())
console.log('CPUs: ', cpus()) // Para escalar procesos en Node.JS
console.log('Memoria Libre: ', freemem() / 1024 / 1024)
console.log('Memoria Total: ', totalmem() / 1024 / 1024)
console.log('uptime: ', uptime() / 60 / 60)
