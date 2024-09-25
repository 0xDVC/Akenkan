import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";
import { useColorScheme as useNativeColorScheme } from "nativewind";

interface ThemeContextProps {
  fontSize: number;
  fontFamily: string;
  setFontSize: (size: number) => void;
  setFontFamily: (family: string) => void;
  currentColorTheme: "light" | "dark" | "system";
  setCurrentColorTheme: (theme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const THEME_STORAGE_KEY = "user_theme_settings";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<string>("Poppins");
  const [currentColorTheme, setCurrentColorTheme] = useState<
    "light" | "system" | "dark"
  >("system");

  const { setColorScheme } = useNativeColorScheme();

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedSettings) {
          const { fontSize, fontFamily, currentColorTheme } =
            JSON.parse(savedSettings);
          setColorScheme(currentColorTheme);
          setFontSize(fontSize);
          setFontFamily(fontFamily);
          setCurrentColorTheme(currentColorTheme);
        }
      } catch (e) {
        console.error("Failed to load theme settings", e);
      }
    };
    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem(
          THEME_STORAGE_KEY,
          JSON.stringify({ fontSize, fontFamily, currentColorTheme })
        );
      } catch (e) {
        console.error("Failed to save theme settings", e);
      }
    };
    saveSettings();
  }, [fontSize, fontFamily, currentColorTheme]);

  useEffect(() => {
    if (currentColorTheme === "system") setCurrentColorTheme("system");
  }, [useColorScheme()]);

  return (
    <ThemeContext.Provider
      value={{
        currentColorTheme,
        setCurrentColorTheme,
        fontSize,
        fontFamily,
        setFontSize,
        setFontFamily,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
