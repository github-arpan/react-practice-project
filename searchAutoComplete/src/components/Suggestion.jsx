import React from "react";

function Suggestion({ data, handleClick }) {
  return (
    <ul className="mt-2 ml-1 text-sm cursor-pointer">
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleClick}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

export default Suggestion;
