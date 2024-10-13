import React, { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, toggleDate] = useState(false);

  const [red, setRed] = useState<string>("150");
  const [green, setgreen] = useState<string>("150");
  const [blue, setblue] = useState<string>("150");

  const [size, setSize] = useState("200");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handelChangeRed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRed(e.target.value);
  };
  const handelChangeGreen = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgreen(e.target.value);
  };
  const handelChangeBlue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setblue(e.target.value);
  };

  const handelChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
    // console.log(size);
  };

  return (
    <div className="clockContainer">
      <div className="clock">
        <div className="clockSettings">
          <ul>
            <li>
              <input
                type="range"
                className="form-range"
                min="0"
                max="255"
                id="customRange2"
                defaultValue={150}
                onChange={(e) => {
                  handelChangeRed(e);
                }}
              ></input>
              <span style={{ color: "RGB(" + red + ",0,0)" }}>R</span>
            </li>
            <li>
              <input
                type="range"
                className="form-range"
                min="0"
                max="255"
                id="customRange2"
                defaultValue={150}
                onChange={(e) => {
                  handelChangeGreen(e);
                }}
              ></input>
              <span style={{ color: "RGB(0," + green + ",0)" }}>G</span>
            </li>
            <li>
              <input
                type="range"
                className="form-range"
                min="0"
                max="255"
                id="customRange2"
                defaultValue={150}
                onChange={(e) => {
                  handelChangeBlue(e);
                }}
              ></input>
              <span style={{ color: "RGB(0,0," + blue + ")" }}>B</span>
            </li>
            <li>
              <input
                type="range"
                className="form-range"
                min="50"
                max="400"
                id="customRange2"
                defaultValue={200}
                onChange={(e) => {
                  handelChangeSize(e);
                }}
              ></input>
              <span>S</span>
            </li>
            <li>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                ></input>
                <label className="form-check-label">Seconds</label>
              </div>
            </li>
            <li>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => {
                    toggleDate(!date);
                    console.log(date);
                  }}
                ></input>
                <label className="form-check-label">Date</label>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="clockDisplay"
          style={{ color: "rgb(" + red + "," + green + "," + blue + ")" }}
        >
          <span className="time" style={{ fontSize: `${size}%` }}>
            {time}
          </span>

          {date && (
            <p className="date">
              {new Date().getDate() +
                "/" +
                (new Date().getMonth() + 1) +
                "/" +
                new Date().getFullYear()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
