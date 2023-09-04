import City from '../Models/City.js';
import cities from '../Models/data/cities.js';
const citiesController = {

    getAllCities: async (req, res, next) => {
        let cities;
        let error = null
        let success = true;
        try {
            cities = await City.find()
        } catch (err) {
            console.log(err)
            success = false;
            error = err
        }

        res.json({
            response: cities,
            success,
            error
        })
    },

    createOneCity: async (req, res, next) => {
        let city;
        let error = null
        let success = true;

        console.log(req.body);

        try {
            await City.create(req.body)
        } catch (error) {
            console.log(error);
        }

        res.json({
            response: city,
            success,
            error
        })
    },
    // getOneCity: async (req, res, next) => {

    //     console.log(req.params)
    //     const { id } = req.params
    //     let cities;
    //     let error = null
    //     let success = true;

    //     try {
    //         cities = await city.findOne({ _id: id }).populate("itineraries")
    //     } catch (err) {
    //         console.log(err)
    //         success = false;
    //         error = err
    //     }

    //     res.json({
    //         response: cities,
    //         success,
    //         error
    //     })
    // },

    updateOneCity: async (req, res, next) => {
        const { id } = req.params
        let city;
        let error = null
        let success = true;
        try {
            await City.findOneAndUpdate({ _id: id }, req.body)
        } catch (error) {
            success = false;
            error = err
            next(err)

        }

        res.json({
            response: city,
            success,
            error
        })

    },

    deleteOneCity: async (req, res, next) => {
        const { id } = req.params
        let city;
        let success = true;
        try {
            await City.findOneAndDelete({ _id: id })
        } catch (err) {
            success = false;
            next(err)

        }

        res.json({
            response: city,
            success,
        
        })

    },

    getOneCity: async ( req, res) => {
        try {
            const city = await City.findById( req.params.id ).populate("itineraries")
            res.status(200).json( { city } )
        } catch (error) {
            res.status(500).json( error )
        }
    }




}

export default citiesController