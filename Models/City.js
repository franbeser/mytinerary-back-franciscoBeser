import {Schema, model, Types} from 'mongoose';
import mongoose from 'mongoose';

// let collection = 'cities';

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    image: {type: String, required: false},
    description: {type: String, required: true},
    itineraries: [{ type: mongoose.Types.ObjectId, ref: 'itineraries' }]

}, {
    timestamps: true
});

const City = mongoose.model('city', schema);

export default City;