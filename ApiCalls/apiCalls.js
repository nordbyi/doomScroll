import { ASTEROID_API_KEY, EQ_API_KEY } from "@env"

export const fetchEarthquakeData = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":`${EQ_API_KEY}`,
      "X-RapidAPI-Host": "everyearthquake.p.rapidapi.com",
    },
  };

  return fetch(
    "https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1",
    options
  );
};

export const fetchDisasterData = async (endpoint) => {
  return await fetch(
    `https://eonet.gsfc.nasa.gov/api/v3/events?category=${endpoint}`
  );
};

export const fetchAsteroidData = async () => {
  return await fetch(
    `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${ASTEROID_API_KEY}`
  );
};

export const fetchStarPhoto = async () => {
  return await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${ASTEROID_API_KEY}`
  );
};