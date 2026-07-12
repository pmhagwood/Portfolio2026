import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const element = document.getElementById(location.hash.slice(1));

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "auto", block: "start" });
  }, [location.hash, location.pathname]);

  return null;
}

export default ScrollToHash;
