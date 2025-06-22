// src/components/ThemeToggle.tsx

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <Button variant="outline" onClick={toggleTheme}>
      {isDark ? (
        <>
          <Sun className="w-4 h-4 mr-2" />
          Light
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 mr-2" />
          Dark
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
