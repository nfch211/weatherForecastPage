import { useState, useEffect } from "react";

function Weather(props) {
  const Date = props.DATE.toString();
  const imgPath = `/pic${props.ICON}.png`;
  return (
    <div className="weather">
      <div>
        <span style={{ fontSize: "15px" }}>
          {Date.substr(4, 2)}月{Date.substr(6, 2)}日
        </span>
      </div>
      <div>{props.WEEK}</div>
      <div>
        <img src={imgPath} style={{ width: "50px" }} />
      </div>
    </div>
  );
}

export default Weather;
