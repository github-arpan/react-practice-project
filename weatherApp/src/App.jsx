import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Weather from "./components/weather/Weather";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f7794c969233175e965cb22047fe5a94`
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
        setWeatherData(data);
        setSearch("");
        console.log(weatherData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };
  useEffect(() => {
    fetchWeatherData("delhi");
  }, []);
  return (
    <div>
      <Input
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <h1></h1>
      ) : (
        <div className="mt-10 bg-green-400/40 py-10 space-y-4 md-max-w-[80%]  mx-auto">
          <div>
            <h1 className="font-bold text-2xl">
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h1>
            <p className="text-xs">{getCurrentDate()}</p>
          </div>
          <div className="flex justify-around font-bold ">
            <p>
              Current Tempareture : {Math.floor(weatherData?.main?.temp / 10)}
              {<sup>o</sup>}
            </p>
            <p>
              Fells like : {Math.floor(weatherData?.main?.feels_like / 10)}
              {<sup>o</sup>}
            </p>
          </div>
          <div>
            <p>{weatherData?.weather[0]?.description}</p>
            <p>Wind : {weatherData?.wind.speed} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
