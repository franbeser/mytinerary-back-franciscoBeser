import router from "express";

const indexRouter = router()

indexRouter.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor en /api')
})

export default indexRouter