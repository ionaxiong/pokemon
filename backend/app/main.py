# import numpy as np
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import pandas as pd
import json

df = pd.read_csv("./app/pokemon.csv")

print("table heads", df.head())

df = df.astype({"Id": int,
"Number": int,
"Name": str,
"Type1": str,
"Type2": str,
"Total": int,
"HP": int,
"Attack": int,
"Defense": int,
"Sp.Atk": int,
"Sp.Def": int,
"Speed": int,
"Generation": int,
"Legendary": bool
})

def parse_csv(df):
    res = df.to_json(orient="records")
    parsed = json.loads(res)
    return parsed

# print(df.to_string())

# print("filter with name bulbasaur: ", df[df["Name"] == "Bulbasaur"])

# print("df keys", df.keys())

# print(df[['Name']].dtypes, "backend check 'Number' column data type")
# print(df[['Legendary']].dtypes, "backend check 'Id' column data type")

# print("df.info ",df.describe)

app = FastAPI()


# development
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

# production
# origins = [
#     "http://pokemon.ionaxiong.com.s3-website.eu-central-1.amazonaws.com",
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", tags=["pokemons"])
async def get_pokemons():
    return parse_csv(df)
    # return {"data": parse_csv(df)}

@app.get("/headers", tags=["headers"])
async def get_headers():
    return df.keys().to_list()

# @app.get("/", tags=["pokemons"])
# async def get_pokemons():
#     return parse_csv(df)
#     # return {"data": parse_csv(df)}


handler = Mangum(app)


