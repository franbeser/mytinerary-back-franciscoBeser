import express, { request, response } from "express";
import indexRouter from "./router/indexRouter.js";

const server = express()

server.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor en /')
})

server.use('/api', indexRouter )

server.listen(3000, (request, response, next) => {console.log("servidor corriendo en puerto 3000");})