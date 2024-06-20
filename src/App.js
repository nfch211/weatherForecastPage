import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./weather";

function App() {
  const [data, setData] = useState(null);

  const url =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>; // Add a loading message

  const { weatherForecast: forecast } = data;

  return (
    <div className="header">
      <h1 className="rampart-one-regular" style={{ color: "black" }}>
        Weather Forecast
      </h1>

      <p>
        powered by <a href="https://www.hko.gov.hk/"> 香港天文台</a>
      </p>
      <h2
        className="japanese"
        style={{ textAlign: "left", marginLeft: "50px", fontSize: "50px" }}
      >
        逆境は福の内,
      </h2>
      <h2
        className="japanese"
        style={{ textAlign: "right", marginRight: "50px" }}
      >
        明るい未来が待つ。
      </h2>
      <p style={{ fontSize: "50px" }}>
        <img src="/bee.png" style={{ width: "100px" }} /> 🤣
      </p>
      <div className="inner-header flex">
        <div className="background">
          {forecast.map((Day, index) => (
            <Weather
              key={index}
              id={index}
              DATE={Day.forecastDate}
              WEEK={Day.week}
              ICON={Day.ForecastIcon}
            />
          ))}
        </div>
      </div>

      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
}
export default App;
