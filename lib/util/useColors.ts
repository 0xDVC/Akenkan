import tailwindConfig from "../../tailwind.config";

export default function useColors() {
    const colors = tailwindConfig.theme.extend.colors;

    return {
        light: {
            text: colors.text.light,
            background: colors.background.light,
            primary: colors.primary.light,
            highlight: colors.highlight.light,
            statusBar: colors.statusBar.light, 
          },
          dark: {
            text: colors.text.dark,
            background: colors.background.dark,
            primary: colors.primary.DEFAULT,
            highlight: colors.highlight.dark,
            statusBar: colors.statusBar.dark, 
          },
    };
       
}