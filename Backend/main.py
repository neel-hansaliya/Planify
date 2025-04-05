from fastapi import FastAPI  # type: ignore
from fastapi.middleware.cors import CORSMiddleware  # type: ignore

app = FastAPI()

# CORS Policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend requests
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Updated destinations_data with more countries and cities
destinations_data = {
    "India": [
        {
            "name": "Taj Mahal",
            "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
            "description": "The Taj Mahal is an iconic symbol of India and a UNESCO World Heritage site.",
            "duration": "2-3 hours",
            "location": "Agra, India",
            "price": "$30"
        },
        {
            "name": "Jaipur",
            "image": "https://www.travelstart.co.za/blog/wp-content/uploads/2019/08/Jaipur-47.jpg",
            "description": "Jaipur, also known as the Pink City, is famous for its forts and palaces.",
            "duration": "3-4 days",
            "location": "Rajasthan, India",
            "price": "$150"
        },
        {
            "name": "Goa",
            "image": "https://t3.ftcdn.net/jpg/02/43/24/76/360_F_243247620_Clg6rXsX4K0lhPWip3oo9Oee28J30L23.jpg",
            "description": "Goa is known for its beautiful beaches, vibrant nightlife, and colonial architecture.",
            "duration": "5-7 days",
            "location": "Goa, India",
            "price": "$200"
        },
        {
            "name": "Kerala",
            "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww",
            "description": "Kerala is known for its backwaters, houseboats, and Ayurvedic treatments.",
            "duration": "7 days",
            "location": "Kerala, India",
            "price": "$300"
        },
    ],
    "Japan": [
        {
            "name": "Mount Fuji",
            "image": "https://media.istockphoto.com/id/1394035521/photo/landscape-image-of-mt-fuji-over-lake-kawaguchiko-with-autumn-foliage-at-sunset-in.jpg?s=612x612&w=0&k=20&c=ed3QAqWzPbWCPq04Ae5IS_BBlvDbiKHgqLdnMUxptqU=",
            "description": "Mount Fuji is Japan’s highest mountain and an iconic symbol of Japan.",
            "duration": "1 day",
            "location": "Yamanashi, Japan",
            "price": "$50"
        },
        {
            "name": "Tokyo Tower",
            "image": "https://www.advantour.com/img/japan/tokyo/tokyo-tower.jpg",
            "description": "Tokyo Tower is a communications and observation tower in the center of Tokyo.",
            "duration": "1-2 hours",
            "location": "Tokyo, Japan",
            "price": "$20"
        },
        {
            "name": "Kyoto Temples",
            "image": "https://www.wamazing.com/media/wp-content/uploads/sites/7/2024/01/pixta_94901590_M.jpg.webp",
            "description": "Kyoto is home to many ancient temples and shrines.",
            "duration": "3-4 days",
            "location": "Kyoto, Japan",
            "price": "$100"
        },
    ],
    "France": [
        {
            "name": "Eiffel Tower",
            "image": "https://cdn.britannica.com/31/255531-050-B7E07090/eiffel-tower-paris-france-champ-de-mars-view.jpg",
            "description": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.",
            "duration": "2-3 hours",
            "location": "Paris, France",
            "price": "$25"
        },
        {
            "name": "Louvre Museum",
            "image": "https://acis.com/wp-content/uploads/blog-images/2014/11/120613_blog_featured.jpg",
            "description": "The Louvre Museum is the world’s largest art museum and a historic monument in Paris.",
            "duration": "4-5 hours",
            "location": "Paris, France",
            "price": "$35"
        },
        {
            "name": "Nice Beach",
            "image": "https://30a.com/wp-content/uploads/2021/10/shutterstock_76435762-1-jpg.webp",
            "description": "Nice Beach is known for its beautiful Mediterranean coastline and vibrant atmosphere.",
            "duration": "Full day",
            "location": "Nice, France",
            "price": "$50"
        },
    ],
    "USA": [
        {
            "name": "Statue of Liberty",
            "image": "https://images.foxtv.com/static.fox5ny.com/www.fox5ny.com/content/uploads/2025/03/932/524/statue-of-liberty-1.jpg?ve=1&tl=1",
            "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor.",
            "duration": "1-2 hours",
            "location": "New York, USA",
            "price": "$20"
        },
        {
            "name": "Grand Canyon",
            "image": "https://roadtrippers.com/wp-content/uploads/2021/11/shutterstock_1190260036-1160x870.jpg",
            "description": "The Grand Canyon is a massive canyon carved by the Colorado River in Arizona, USA.",
            "duration": "Full day",
            "location": "Arizona, USA",
            "price": "$80"
        },
        {
            "name": "Yellowstone National Park",
            "image": "https://preview.redd.it/bdutgdxolof21.jpg?width=1080&crop=smart&auto=webp&s=f2b3a0e9d34ea8e1960e33ab695a41109a1d0a57",
            "description": "Yellowstone is the first national park in the world, known for its geothermal features.",
            "duration": "3-4 days",
            "location": "Wyoming, USA",
            "price": "$100"
        },
    ],
    "Italy": [
        {
            "name": "Colosseum",
            "image": "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg",
            "description": "The Colosseum is an ancient amphitheater in the center of Rome, Italy.",
            "duration": "2-3 hours",
            "location": "Rome, Italy",
            "price": "$25"
        },
        {
            "name": "Leaning Tower of Pisa",
            "image": "https://cdn.blastness.biz/media/1167/top/thumbs/medium/top_pisa1.jpg",
            "description": "The Leaning Tower of Pisa is a freestanding bell tower of the cathedral in Pisa, Italy.",
            "duration": "1 hour",
            "location": "Pisa, Italy",
            "price": "$15"
        },
        {
            "name": "Venice Canals",
            "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/53/7b/0f/photo0jpg.jpg?w=900&h=500&s=1",
            "description": "Venice is famous for its canals, the Grand Canal being the most famous.",
            "duration": "2-3 hours",
            "location": "Venice, Italy",
            "price": "$30"
        },
    ],
}

@app.get("/destinations")
def get_countries():
    """
    Fetch available countries from destinations_data keys.
    """
    return {"destinations": list(destinations_data.keys())}

@app.get("/search")
def get_places(destination: str):
    """
    Fetch places and their details based on the selected country.
    """
    places = destinations_data.get(destination, [])
    return {"places": places}
