from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json


df = pd.read_csv("data\pokemon.csv")

def parse_csv(df):
    res = df.to_json(orient="records")
    parsed = json.loads(res)
    return parsed

# print(df.to_string())

print(df[df["Name"] == "Bulbasaur"])

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

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

# @app.get("/", tags=["pokemons"])
# async def get_pokemons():
#     return parse_csv(df)
#     # return {"data": parse_csv(df)}



