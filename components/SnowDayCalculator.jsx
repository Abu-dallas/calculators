"use client";
import { useState } from "react";

export default function SnowDayCalculator() {
  const [location, setLocation] = useState("");
  const [schoolLevel, setSchoolLevel] = useState("highschool");
  const [strictness, setStrictness] = useState("moderate");
  const [chance, setChance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cityName, setcityName] = useState();
  const [country, setcountry] = useState();

  const [weatherData, setWeatherData] = useState(null);

  const getSnowDayChance = (temp, hasSnow, strictness) => {
    let baseChance = 0;

    if (temp <= -10) baseChance = 90;
    else if (temp <= 0) baseChance = 75;
    else if (temp <= 5) baseChance = 50;
    else baseChance = 20;

    if (hasSnow) baseChance += 20;

    if (strictness === "strict") baseChance -= 20;
    else if (strictness === "lenient") baseChance += 15;

    baseChance += Math.floor(Math.random() * 10) - 5;

    return Math.max(0, Math.min(100, baseChance));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setChance(null);
    setWeatherData(null);

    try {
      const apiKey = "754fb4faf3d6a5e9e626b4385c313821";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      const cityName = data.name;
      const country = data.sys.country;
      setcityName(cityName);
      setcountry(country);

      if (data.cod !== 200)
        throw new Error(data.message || "Location not found");

      const temp = data.main.temp;
      const weather = data.weather.map((w) => w.main.toLowerCase());
      const hasSnow = weather.includes("snow");

      const calculatedChance = getSnowDayChance(temp, hasSnow, strictness);
      setChance(calculatedChance);

      setWeatherData({
        temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        cloudiness: data.clouds.all,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
        visibility: data.visibility,
        weatherMain: data.weather[0].main,
        weatherDesc: data.weather[0].description,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        rain1h: data.rain?.["1h"] || 0,
        snow1h: data.snow?.["1h"] || 0,
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setChance(null);
    setLocation("");
    setSchoolLevel("highschool");
    setStrictness("moderate");
    setError("");
    setWeatherData(null);
  };

  return (
    <div className="mb-12 flex flex-col items-center p-4 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full md:max-w-lg border-1 border-slate-300 rounded-xl p-6 space-y-4"
      >
        <h1 className="text-3xl max-sm:text-2xl font-bold text-center text-black my-6 mb-8">
          ❄️ Snow Day Calculator
        </h1>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          📍 Enter Your City or ZIP
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="e.g., Chicago or 60601"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          🎓 School Level
        </label>
        <select
          value={schoolLevel}
          onChange={(e) => setSchoolLevel(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="elementary">Elementary School</option>
          <option value="highschool">High School</option>
          <option value="college">College / University</option>
        </select>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          📏 School Policy Strictness
        </label>
        <select
          value={strictness}
          onChange={(e) => setStrictness(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="strict">Strict – Rarely cancels</option>
          <option value="moderate">Moderate – Occasionally cancels</option>
          <option value="lenient">Lenient – Often cancels</option>
        </select>

        <button
          type="submit"
          className="w-full bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 mt-6 rounded-lg transition duration-200"
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate Chance"}
        </button>
      </form>

      {chance !== null && (
        <h2 className="text-2xl font-bold text-center mt-4">
          Weather in {cityName}, {country}
        </h2>
      )}

      {error && (
        <div className="text-red-500 mt-4 text-sm text-center max-w-md">
          ❌ {error}
        </div>
      )}

      {chance !== null && (
        <div className="mt-6 bg-white w-full lg:max-w-lg border-1 border-slate-200 rounded-xl p-6 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            🌨️ {chance}% Chance of Snow Day
          </h2>
          <p className="text-gray-600">
            Based on real weather data and your inputs, there's a {chance}%
            probability school may be canceled.
          </p>
        </div>
      )}

      {weatherData && (
        <div className="max-w-2xl max-sm:w-full mx-auto mt-10 p-6 bg-white border-1 border-slate-200  rounded-2xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Current Weather
              </h2>
              <p className="text-sm text-gray-500">Updated just now</p>
            </div>
            <div className="text-right">
              <span className="text-5xl font-semibold text-blue-600">
                {weatherData.temp}°C
              </span>
              <p className="text-sm text-gray-500">
                Feels like {weatherData.feelsLike}°C
              </p>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <p>
              Min: <span className="font-medium">{weatherData.tempMin}°C</span>
            </p>
            <p>
              Max: <span className="font-medium">{weatherData.tempMax}°C</span>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-700 font-medium">Humidity</span>
                <span className="text-gray-500">{weatherData.humidity}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${weatherData.humidity}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-700 font-medium">
                  Cloud Coverage
                </span>
                <span className="text-gray-500">{weatherData.cloudiness}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-600 h-2 rounded-full"
                  style={{ width: `${weatherData.cloudiness}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-700 font-medium">Visibility</span>
                <span className="text-gray-500">
                  {weatherData.visibility / 1000} km
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: `${Math.min(
                      100,
                      (weatherData.visibility / 10000) * 100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
            <div>
              <p>
                <span className="font-semibold">Pressure:</span>{" "}
                {weatherData.pressure} hPa
              </p>
              <p>
                <span className="font-semibold">Wind:</span>{" "}
                {weatherData.windSpeed} m/s at {weatherData.windDeg}°
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Rain (1h):</span>{" "}
                {weatherData.rain1h} mm
              </p>
              <p>
                <span className="font-semibold">Snow (1h):</span>{" "}
                {weatherData.snow1h} mm
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Condition:</span>{" "}
                {weatherData.weatherMain} ({weatherData.weatherDesc})
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Sunrise:</span>{" "}
                {weatherData.sunrise}
              </p>
              <p>
                <span className="font-semibold">Sunset:</span>{" "}
                {weatherData.sunset}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-16">
            <button
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm"
            >
              🔁 Try Again
            </button>
            <button
              onClick={() => alert("Sharing...")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              📤 Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
