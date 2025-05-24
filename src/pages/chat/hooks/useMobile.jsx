import React from "react";

export default function useMobile(breakpoint = 768) {
  const [isMobile, setMobile] = React.useState(
    () => window.innerWidth < breakpoint
  );

  React.useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 745);
    document.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
