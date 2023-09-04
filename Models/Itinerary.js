import mongoose from 'mongoose';
import {Schema, model, Types} from 'mongoose';
import City from './City.js';


let schema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    duration: {type: String, required: true},
    authorName: {type: String, required: true},
    authorImg: {type: String},
    city: {type: Schema.Types.ObjectId, ref: 'city', required: true},

}, {
    timestamps: true
});

const Itinerary = mongoose.model('itineraries', schema);

export default Itinerary;