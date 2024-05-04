import { useState, useEffect, createContext, useContext } from "react";
import { ThemeContextType, ThemeContextProviderType } from "../types/ThemeContext";

const defaultThemeContextValue: ThemeContextType = {
    themeflag: false,
    theme: "light",
    toggleTheme: () => {},
};
export const ThemeContext = createContext<ThemeContextType>(
    defaultThemeContextValue
);
export function useTheme() {
    return useContext(ThemeContext);
}
export const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
    const [themeflag, setThemeFlag] = useState<boolean>(false);
    var theme: string = themeflag ? "dark" : "light";
    const toggleTheme = () => {
        setThemeFlag((themeflag) => !themeflag);

        var localtheme = localStorage.getItem("theme");
        if (localtheme === "light") localStorage.setItem("theme", "dark");
        else if (localtheme === "dark") localStorage.setItem("theme", "light");
    };
    useEffect(() => {
        if (localStorage) {
            var localtheme = localStorage.getItem("theme");
            if (!localtheme) localStorage.setItem("theme", "light");
            else if (localtheme === "light") setThemeFlag(false);
            else if (localtheme === "dark") setThemeFlag(true);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ themeflag, theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
