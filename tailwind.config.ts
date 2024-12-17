import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["var(--font-avenir-next)"],
    },
    fontSize: {
      xsmall: ["8px", { lineHeight: "12px" }],
      small: ["12px", { lineHeight: "16px" }],
      medium: ["16px", { lineHeight: "24px" }],
      "medium-emphasis": ["16px", { lineHeight: "24px", fontWeight: 600 }],
      large: ["20px", { lineHeight: "32px" }],
      "large-emphasis": ["20px", { lineHeight: "32px", fontWeight: 600 }],
      "x-large-emphasis": ["32px", { lineHeight: "40px", fontWeight: 600 }],
      "header-5": [
        "16px",
        { lineHeight: "24px", letterSpacing: "-2%", fontWeight: 600 },
      ],
      "header-4": [
        "20px",
        { lineHeight: "24px", letterSpacing: "-2%", fontWeight: 600 },
      ],
    },
    colors: {
      red: "#DD0100",
      black: "#000000",
      white: "#FFFFFF",
      "attention-high": "#233E48",
      "attention-medium": "#536F79",
      "attention-high-invert": "#EDF1F2",
      "attention-medium-invert": "#B8C6CC",
      "attention-low": "#83979B",
    },
    extend: {
      borderWidth: {
        3: "3px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "3rem",
          lg: "0.5rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "896px",
          xl: "1280px",
        },
      },
      spacing: {
        "21": "84px",
        "25": "100px",
        "28": "112px",
        "30": "120px",
      },
      opacity: {
        "4": "0.04",
        "8": "0.08",
        "12": "0.12",
        "16": "0.16",
      },
      borderColor: {
        default: "rgba(34, 78, 96, 0.12)",
        light: "rgba(34, 78, 96, 0.08)",
        "light-invert": "rgba(255, 255, 255, 0.08)",
        "attention-medium": "rgba(34, 78, 96, 0.24)",
      },
      backgroundColor: {
        default: "#FFFFFF",
        light: "#EDF3F5",
      },
      gradientColorStops: {
        transparent: "#EDF3F500",
        light: "#EDF3F5",
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addBase, theme } = api;

      addBase({
        // Standaard tekstkleur voor alle tekst
        body: {
          color: theme("colors.attention-medium"),
        },
        // Standaard kleur voor titels
        "h1, h2, h3, h4, h5, h6, blockquote": {
          color: theme("colors.attention-high"),
        },
      });

      addBase({
        ".switchcard-markdown ul": {
          listStyleType: "square",
          listStylePosition: "outside",
          paddingLeft: theme("spacing.5"),
          marginBottom: theme("spacing.4"),
        },
        ".switchcard-markdown ol": {
          listStyleType: "decimal",
          listStylePosition: "outside",
          paddingLeft: theme("spacing.5"),
          marginBottom: theme("spacing.4"),
        },
        ".switchcard-markdown li": {
          marginBottom: theme("spacing.2"),
        },
      });

      addBase({
        ".text-header-1": {
          fontSize: "40px",
          lineHeight: "48px",
          fontWeight: "700",
        },
        "@screen md": {
          ".text-header-1": {
            fontSize: "56px",
            lineHeight: "64px",
          },
        },
        "@screen lg": {
          ".text-header-1": {
            fontSize: "64px",
            lineHeight: "72px",
          },
        },
        "@screen xl": {
          ".text-header-1": {
            fontSize: "72px",
            lineHeight: "80px",
          },
        },
      });

      addBase({
        ".text-header-2": {
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: "600",
        },
        "@screen md": {
          ".text-header-2": {
            fontSize: "36px",
            lineHeight: "44px",
          },
        },
        "@screen lg": {
          ".text-header-2": {
            fontSize: "40px",
            lineHeight: "48px",
          },
        },
        "@screen xl": {
          ".text-header-2": {
            fontSize: "48px",
            lineHeight: "56px",
          },
        },
      });

      addBase({
        ".text-header-3": {
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "600",
        },
        "@screen md": {
          ".text-header-3": {
            fontSize: "24px",
            lineHeight: "32px",
          },
        },
        "@screen lg": {
          ".text-header-3": {
            fontSize: "28px",
            lineHeight: "36px",
          },
        },
        "@screen xl": {
          ".text-header-3": {
            fontSize: "32px",
            lineHeight: "40px",
          },
        },
      });

      addBase({
        ".text-xx-large": {
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: "600",
        },
        "@screen md": {
          ".text-xx-large": {
            fontSize: "36px",
            lineHeight: "44px",
          },
        },
        "@screen lg": {
          ".text-xx-large": {
            fontSize: "40px",
            lineHeight: "48px",
          },
        },
        "@screen xl": {
          ".text-xx-large": {
            fontSize: "48px",
            lineHeight: "56px",
          },
        },
      });

      // Behouden van de bestaande container implementatie
      addBase({
        ".container": {
          width: "100%",
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: theme("container.padding.DEFAULT"),
          paddingLeft: theme("container.padding.DEFAULT"),
          "@screen xsm": {
            paddingRight: theme("container.padding.xsm"),
            paddingLeft: theme("container.padding.xsm"),
          },
          "@screen md": {
            paddingRight: theme("container.padding.md"),
            paddingLeft: theme("container.padding.md"),
          },
          "@screen lg": {
            maxWidth: theme("screens.lg"),
            paddingRight: theme("container.padding.lg"),
            paddingLeft: theme("container.padding.lg"),
          },
          "@screen xl": {
            maxWidth: theme("screens.xl"),
          },
        },
      });
    },
  ],
};

export default config;
