import React, { useEffect, useState } from 'react'
import ThemeContext from './index';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const changeStyles = () => {
        localStorage.setItem("theme", theme);

        if(theme === "light") {
            $("body").removeClass("dark").addClass("light");
        }else{
            $("body").removeClass("light").addClass("dark");
        }
    }

    useEffect(() => changeStyles(), []);

    useEffect(() => changeStyles(), [theme]);


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;