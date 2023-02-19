export const fetchEarthquakeData = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ba66df797msha781f34ed6e32a9p18711ejsn08b3a5f6387c",
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
    'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=ulYarcl0ipmJHoBBNmBNixfTTrlW1wVK5kNAsMGc'
  )
}