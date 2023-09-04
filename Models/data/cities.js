import 'dotenv/config.js';
import '../../config/database.js';
import City from '../City.js';

let cities = [
    {
        name: "Bangkok",
        country: "Thailand",
        image: "https://elviajista.com/wp-content/uploads/2022/04/dondealojarseenbangkok-730x474.jpg",
        description: "Is a vibrant and bustling city known for its ornate temples, bustling markets, and vibrant street life.",

    },
    {
        name: "Paris",
        country: "France",
        image: "https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg",
        description: "The 'City of Love' is famous for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and charming neighborhoods.",

    },
    {
        name: "London",
        country: "United Kingdom",
        image: "https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg",
        description: "Is a mix of historic and modern attractions, including the British Museum, Buckingham Palace, and the vibrant West End.",

    },
    {
        name: "Dubai",
        country: "United Arab Emirates",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg",
        description: "Is a futuristic city known for its towering skyscrapers, luxury shopping malls, and extravagant entertainment options.",

    },
    {
        name: "New York City",
        country: "United States",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
        description: "The city that never sleeps, New York offers world-famous sites like Times Square, Central Park, and the Statue of Liberty.",

    },
    {
        name: "Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW8lMkMlMjBqYXBhbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        description: "Is a blend of traditional culture and futuristic technology, with attractions like Shibuya Crossing, Tokyo Tower, and historic temples.",

    },
    {
        name: "Istanbul",
        country: "Turkey",
        image: "https://media.timeout.com/images/105859738/image.jpg",
        description: "Straddles Europe and Asia, offering a rich history seen through landmarks like the Hagia Sophia, Blue Mosque, and Grand Bazaar",

    },
    {
        name: "Buenos Aires",
        country: "Argentina",
        image: "https://fotos.perfil.com/2022/07/14/trim/1280/720/ciudad-de-buenos-aires-1386884.jpg",
        description: "The city’s infrastructure, its history and culture, and an architecture that combines the past with Avant-guard designs, are an invitation to the thousands of tourists that arrive all year round.",

    },
    {
        name: "Seoul",
        country: "South Korea",
        image: "https://content.r9cdn.net/rimg/dimg/30/0c/6318617a-city-35982-163ff913019.jpg?width=1200&height=630&xhint=2421&yhint=1876&crop=true",
        description: "Seamlessly merges ancient palaces and temples with contemporary architecture, showcasing Korean traditions and pop culture.",

    },
    {
        name: "Kuala Lumpur",
        country: "Malaysia",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/b1/ac/e8.jpg",
        description: "Is defined by the Petronas Twin Towers, vibrant street markets, and cultural diversity.",

    },
    {
        name: "Hong Kong",
        country: "China",
        image: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/10/08/61600f039c816.r_d.1046-727-5764.jpeg",
        description: "Is a dynamic city with a stunning skyline, bustling markets, and a mix of Eastern and Western influences.",

    },
    {
        name: "Rome",
        country: "Italy",
        image: "https://img2.rtve.es/i/?w=1600&i=1674749554354.jpg",
        description: "The Eternal City, is steeped in history with attractions like the Colosseum, Roman Forum, and Vatican City."

    },
    {
        name: "Barcelona",
        country: "Spain",
        image: "https://blog.renfe.com/wp-content/uploads/2023/03/Barcelona-Blog-de-Renfe-4.jpg",
        description: "Boasts distinctive architecture by Gaudí, beautiful beaches, and a lively arts and culinary scene.",

    },
    {
        name: "Amsterdam",
        country: "Netherlands",
        image: "https://a.cdn-hotels.com/gdcs/production112/d1899/d77bcff2-a859-4785-bdb1-3b15a0887607.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        description: "Is known for its picturesque canals, historic houses, world-class museums, and vibrant nightlife.",

    },
    {
        name: "Milan",
        country: "Italy",
        image: "https://blog-italia.com/wp-content/uploads/2023/06/galerias-umberto-milan.jpg",
        description: "Is a global fashion and design capital, featuring stunning architecture, art galleries, and cultural attractions.",

    },
]

// City.insertMany(cities);

export default cities