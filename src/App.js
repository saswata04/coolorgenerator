import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleChange = (e) => {
    setColor(e.target.value);
    setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={handleChange}
            placeholder="#f15025"
            className={`${isError ? "error" : null}`}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, idx) => {
          return (
            <SingleColor
              key={idx}
              {...color}
              index={idx}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
