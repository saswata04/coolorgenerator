import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  const getColorClass = () => {
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return yiq >= 128 ? null : "color-light";
  };

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${getColorClass()}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <div>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
      </div>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
