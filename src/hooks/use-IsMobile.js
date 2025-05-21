import React from "react";

export default function useIsMobile({ breakpoint = 768 }) {
  const [isMobile, setIsMobile] = React.useState(
    () => window.innerWidth < breakpoint
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
