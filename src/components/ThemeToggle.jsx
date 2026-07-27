import { useEffect, useState } from "react";
import "../styles/ThemeToggle.css";
import { FaMoon, FaSun } from "react-icons/fa";


function ThemeToggle () {

const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark"
);

useEffect(() => {

  if(darkMode) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark")
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }

},
 [darkMode]);

 return (
     <button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
</button>
       
 )

}

export default ThemeToggle;