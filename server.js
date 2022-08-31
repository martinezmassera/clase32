const express = require('express')
const log4js = require('log4js')

const app = express()
const PORT = process.env.PORT || 8081

log4js.configure({
    appenders: {
        myLoggerConsole: { type: "console" },
        myLoggerFile: { type: 'file', filename: 'info.log' },
        myLoggerError: { type: 'file', filename: 'error.log' }
    },
    categories: {
        default: { appenders: ['myLoggerConsole', 'myLoggerFile'], level: "trace" },
        consola: { appenders: ['myLoggerConsole'], level: "debug" },
        archivo: { appenders: ['myLoggerFile'], level: "warn" },
        archivo2: { appenders: ['myLoggerError'], level: "error" },
        todos: { appenders: ['myLoggerConsole', 'myLoggerError'], level: "error" }
    }
})
const logger = log4js.getLogger();


app.get('/', (req, res) => {
    console.log(process.pid)
    logger.info(`La ruta es '${req.url}'  y  ${req.method}`)
    return res.status(200).send('ok')
})
app.get('/status', (req, res) => {
    console.log(process.pid)
    logger.info(`La ruta es '${req.url}'  y  ${req.method}`)
    returnres.status(200).send('ok')
})
app.get('/maxi', (req, res) => {
    console.log(process.pid)
    logger.info(`La ruta es '${req.url}'  y  ${req.method}`)
    return res.status(200).send('ok')
})
app.get('*', (req, res) => {
    console.log(process.pid)
    log4js.getLogger('archivo2').error(`La ruta es '${req.url}'  y  ${req.method}`)
    return res.status(400).send('Error- ruta no encontrada')
})



app.listen(PORT, () => {
    console.log(`Running in port ${PORT}... `)
})