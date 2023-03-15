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

export const fetchOneAsteroid = () => {
  return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-04&end_date=2023-08-11&detailed=false&api_key=${ASTEROID_API_KEY}`);
};

const fetchAsteroidByWeek = (startDate, endDate) => {
  return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&detailed=false&api_key=${ASTEROID_API_KEY}`);
};

export const fetchAllAsteroidsByWeek = () => {
  return Promise.all([
    fetchAsteroidByWeek("2023-08-04", "2023-08-11"),
    fetchAsteroidByWeek("2023-03-31", "2023-04-07"),
    fetchAsteroidByWeek("2023-04-07", "2023-04-14"),
  ])
}
