import { Router } from "express";
import itinerariesController from "../controllers/itinerariesController.js";
import Itinerary from "../Models/Itinerary.js";

const itinerariesRouter = Router()
const {getAllItineraries, getOneItinerary, createItinerary, updateOneItinerary, deleteOneItinerary, showOneItinerary} = itinerariesController

itinerariesRouter.get('/', getAllItineraries)
// itinerariesRouter.get('/:var', showOneItinerary)
itinerariesRouter.post('/', createItinerary)
itinerariesRouter.get('/:id', getOneItinerary)
itinerariesRouter.put('/:id', updateOneItinerary)
itinerariesRouter.delete('/:id', deleteOneItinerary)

export default itinerariesRouter