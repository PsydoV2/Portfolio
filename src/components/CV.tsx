import { useState } from "react";

interface CVProps {
  height: string;
}

export const CV = (props: CVProps) => {
  const [messageIndex, setMessageIndex] = useState(-1);
  const messages = ["HoLa", "LGS", "Ausbildung"];
  const message = messages[messageIndex];

  return (
    <div className="cvCon" style={{ height: props.height }}>
      <div
        className="cvBorder"
        style={{ display: props.height == "0px" ? "none" : "block" }}
      >
        <div
          className="cvPoint"
          onMouseEnter={() => {
            setMessageIndex(0);
          }}
          onMouseLeave={() => {
            setMessageIndex(-1);
          }}
          onClick={() => {
            setMessageIndex(0);
          }}
        ></div>
        <div
          className="cvPoint"
          onMouseEnter={() => {
            setMessageIndex(1);
          }}
          onMouseLeave={() => {
            setMessageIndex(-1);
          }}
          onClick={() => {
            setMessageIndex(1);
          }}
        ></div>
        <div
          className="cvPoint"
          onMouseEnter={() => {
            setMessageIndex(2);
          }}
          onMouseLeave={() => {
            setMessageIndex(-1);
          }}
          onClick={() => {
            setMessageIndex(2);
          }}
        ></div>
      </div>

      <div className="cvText">{messageIndex != -1 && <p>{message}</p>}</div>
    </div>
  );
};
