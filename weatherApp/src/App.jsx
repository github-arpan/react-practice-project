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
        <div className="mt-10">
          <div>
            <h1 className="font-bold text-xl">
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h1>
            <p>{getCurrentDate()}</p>
          </div>
          <div>
            <p>{weatherData?.main?.temp}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
