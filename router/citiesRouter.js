import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
import City from "../Models/City.js";

const citiesRouter = Router()
const {getAllCities, getOneCity, createOneCity, updateOneCity, deleteOneCity, getACity} = citiesController

citiesRouter.get('/', getAllCities)
// citiesRouter.get('/:var', getOneCity)
citiesRouter.post('/', createOneCity)
citiesRouter.get('/:id', getOneCity)
citiesRouter.put('/:id', updateOneCity)
citiesRouter.delete('/:id', deleteOneCity)

export default citiesRouter