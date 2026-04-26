import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #mango), jump INSTANTLY to that specific element
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "instant" }); // Changed from "smooth" to "instant"
        }
      }, 10); // Lowered the timeout so it happens almost imperceptibly fast
    } 
    // Otherwise, jump INSTANTLY to the absolute top of the new page
    else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}