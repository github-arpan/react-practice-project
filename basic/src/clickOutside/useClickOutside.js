import React, { useEffect } from "react";

function useClickOutside(ref, handler) {
  useEffect(() => {
    function linster(e) {
      if (!ref.current || ref.current.contains(e.target)) return;

      handler(e);
    }
    document.addEventListener("mousedown", linster);

    return () => {
      document.removeEventListener("mousedown", linster);
    };
  });
}

export default useClickOutside;
