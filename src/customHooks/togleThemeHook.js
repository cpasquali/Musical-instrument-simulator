import { useState } from "react"

const useTogleTheme = () => {
    const [theme, setTheme] = useState("light");

    const togleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    return {theme, togleTheme}
};

export default useTogleTheme;