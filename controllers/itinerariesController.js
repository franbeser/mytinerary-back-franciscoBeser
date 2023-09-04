import City from "../Models/City.js";
import Itinerary from "../Models/Itinerary.js";



const itinerariesController = {

    getAllItineraries: async (req, res, next) => {
        let itineraries;
        let error = null
        let success = true;
        try {
            itineraries = await Itinerary.find().populate({

                path: 'city',
                select: 'name -_id',
                strictPopulate: false,
            })
        } catch (err) {
            console.log(err)
            success = false;
            error = err
        }

        res.json({
            response: itineraries,
            success,
            error
        })
    },

    createItinerary: async (req, res) => {

        try {
            if (req.body.city) {
                let cityQuery = { name: { $regex: req.body.city } }
                const city = await City.findOne(cityQuery)
                let aux = { ...req.body }
                aux.city = city._id
                const newItinerary = await Itinerary.create(aux)
                await City.findOneAndUpdate({ _id: city._id }, { $push: { itineraries: newItinerary._id } })
                res.status(201).json({ newItinerary: newItinerary })
            } else {
                res.json({ error: 'city is required' })
            }
        }
        catch (error) {
            console.log(error);
        }

    },
    getOneItinerary: async (req, res, next) => {

        console.log(req.params)
        const { id } = req.params
        let itineraries;
        let error = null
        let success = true;

        try {
            itineraries = await Itinerary.findOne({ _id: id })
        } catch (err) {
            console.log(err)
            success = false;
            error = err
        }

        res.json({
            response: itineraries,
            success,
            error
        })
    },

    updateOneItinerary: async (req, res, next) => {
        const { id } = req.params
        let itinerary;
        let error = null
        let success = true;
        try {
            await Itinerary.findOneAndUpdate({ _id: id }, req.body)
        } catch (error) {
            success = false;
            error = err
            next(err)

        }

        res.json({
            response: itinerary,
            success,
            error
        })

    },

    deleteOneItinerary: async (req, res, next) => {
        const { id } = req.params
        let itinerary;
        let success = true;
        try {
            await Itinerary.findOneAndDelete({ _id: id })
        } catch (err) {
            success = false;
            next(err)

        }

        res.json({
            response: itinerary,
            success,

        })

    },

    showOneItinerary: (req, res, netx) => {
        const itinerary = Itinerary.find(itinerary => itinerary.name == req.params.var)
        res.json({
            info: itinerary,
            success: true,
            error: null
        })
    }




}

export default itinerariesController