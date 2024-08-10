import React, { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

function ClickOutside() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div
          ref={ref}
          style={{ backgroundColor: "blue", padding: "10px", color: "white" }}
        >
          <h1>This is the content </h1>
          <p>click outside to hide the content</p>
          <button onClick={() => setShowContent(false)}>close</button>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>
          Click to show Content
        </button>
      )}
    </div>
  );
}

export default ClickOutside;
