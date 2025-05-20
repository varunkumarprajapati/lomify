import React from "react";

export default function useDebounce() {
  let timer = React.useRef(null);

  const run = (fn, duration = 1500) => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setTimeout(() => fn(), duration);
  };

  return run;
}
