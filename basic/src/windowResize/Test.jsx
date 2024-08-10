import React from "react";
import useWindowResize from ".";

function WindowResize() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <p>width : {width}</p>
      <p>height : {height}</p>
    </div>
  );
}

export default WindowResize;
