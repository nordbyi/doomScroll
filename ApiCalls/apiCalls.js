const fetchEarthquakeData = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ba66df797msha781f34ed6e32a9p18711ejsn08b3a5f6387c",
      "X-RapidAPI-Host": "everyearthquake.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      "https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1",
      options
    );
    const data = await response.json();
    return data.data[0];
  } catch {
    throw new Error("Something went wrong.");
  }
};

export default fetchEarthquakeData;
