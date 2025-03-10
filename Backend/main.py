# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI()

# # CORS Policy
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Allow frontend requests
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Fake Destination Data
# destinations_data = {
#     "India": ["Taj Mahal", "Jaipur", "Goa", "Kerala"],
#     "Japan": ["Mount Fuji", "Tokyo Tower", "Kyoto Temples"],
#     "France": ["Eiffel Tower", "Louvre Museum", "Nice Beach"],
# }

# @app.get("/search")
# def get_destinations(destination: str):
#     places = destinations_data.get(destination, [])
#     return places


# @app.get("/destinations")
# def get_destination_keys():
#     return {"destinations": list(destinations_data.keys())}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend requests
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Destination Data with Images
destinations_data = {
    "India": [
        {"name": "Taj Mahal", "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"},
        {"name": "Jaipur", "image": "https://www.travelstart.co.za/blog/wp-content/uploads/2019/08/Jaipur-47.jpg"},
        {"name": "Goa", "image": "https://t3.ftcdn.net/jpg/02/43/24/76/360_F_243247620_Clg6rXsX4K0lhPWip3oo9Oee28J30L23.jpg"},
        {"name": "Kerala", "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww"},
    ],
    "Japan": [
        {"name": "Mount Fuji", "image": "https://media.istockphoto.com/id/1394035521/photo/landscape-image-of-mt-fuji-over-lake-kawaguchiko-with-autumn-foliage-at-sunset-in.jpg?s=612x612&w=0&k=20&c=ed3QAqWzPbWCPq04Ae5IS_BBlvDbiKHgqLdnMUxptqU="},
        {"name": "Tokyo Tower", "image": "https://www.advantour.com/img/japan/tokyo/tokyo-tower.jpg"},
        {"name": "Kyoto Temples", "image": "https://www.wamazing.com/media/wp-content/uploads/sites/7/2024/01/pixta_94901590_M.jpg.webp"},
    ],
    "France": [
        {"name": "Eiffel Tower", "image": "https://cdn.britannica.com/31/255531-050-B7E07090/eiffel-tower-paris-france-champ-de-mars-view.jpg"},
        {"name": "Louvre Museum", "image": "https://acis.com/wp-content/uploads/blog-images/2014/11/120613_blog_featured.jpg"},
        {"name": "Nice Beach", "image": "https://30a.com/wp-content/uploads/2021/10/shutterstock_76435762-1-jpg.webp"},
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
    Fetch places and their images based on the selected country.
    """
    places = destinations_data.get(destination, [])
    return {"places": places}

import http.client

conn = http.client.HTTPSConnection("streaming-availability.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "c1ac7f4d27msh19d3e6ef398cbd8p185601jsn329861f40ca6",
    'x-rapidapi-host': "streaming-availability.p.rapidapi.com"
}

conn.request("GET", "/shows/%7Btype%7D/%7Bid%7D", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))