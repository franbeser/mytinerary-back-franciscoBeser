import 'dotenv/config.js';
import '../../config/database.js';
import Itinerary from '../Itinerary.js';

let itineraries = [
    {
        name: "Visit the Grand Palace",
        price: "2",
        description: "Explore the stunning Grand Palace, featuring ornate temples and the famous Temple of the Emerald Buddha.",
        duration: "120",
        authorName: "Juan Perez",
        autorImg: "https://hispanicexecutive.com/wp-content/uploads/2021/06/Juan-Perez-UPS-thumbnail.jpg",
        city: "Bangkok",

    },

    {
        name: "Explore Damnoen Saduak Floating Market",
        price: "2",
        description: "Experience a unique floating market with local food and souvenirs along scenic canals.",
        duration: "180",
        authorName: "Carlos Gonzalez",
        autorImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Rockies_outfielder_Carlos_Gonzalez_talks_to_reporters_at_2016_All-Star_Game_availability._%2827899603273%29.jpg/1200px-Rockies_outfielder_Carlos_Gonzalez_talks_to_reporters_at_2016_All-Star_Game_availability._%2827899603273%29.jpg",
        city: "Bangkok",

    },

    {
        name: "Discover Wat Pho and the Reclining Buddha",
        price: "1",
        description: "Visit Wat Pho to see the historic Reclining Buddha statue and beautiful gardens.",
        duration: "60",
        authorName: "Jose Garcia",
        autorImg: "https://www.fordfoundation.org/wp-content/uploads/2017/05/jose_garcia_extended.jpg?w=510&h=510&crop=1",
        city: "Bangkok",

    },

]

// Itinerary.insertMany(itineraries);

export default itineraries
