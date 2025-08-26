import React from "react";
import { useState } from "react";

function SnowdayForm() {
  const [location, setLocation] = useState("");
  const [schoolLevel, setSchoolLevel] = useState("highschool");
  const [strictness, setStrictness] = useState("moderate");
  const [chance, setChance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cityName, setcityName] = useState();
  const [country, setcountry] = useState();

  const [weatherData, setWeatherData] = useState(null);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full md:max-w-lg border-1 border-slate-200 rounded-xl p-6 space-y-4"
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
    </div>
  );
}

export default SnowdayForm;
