import { useEffect, useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-500 p-1 rounded-lg shadow-lg text-white bg-black border border-white transition-all duration-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
      aria-label="Back to top"
    >
      <KeyboardArrowUp />
    </button>
  );
};

export default BackToTopButton;