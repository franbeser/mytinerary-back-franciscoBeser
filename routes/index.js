import 'dotenv/config.js'
import express from 'express';
import indexRouter from '../router/indexRouter.js';
import cors from 'cors'
import { Router } from 'express';
import '../config/database.js'
const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)

server.get('/', (request, response, next) => {
response.send('Bienvenido a mi servidor')
})

server.listen(process.env['PORT'], () => {console.log('Servidor corriendo en puerto ' + process.env['PORT'])})

export default server;
