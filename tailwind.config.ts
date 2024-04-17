import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        "royal-blue": "hsl(241, 81%, 54%)",
        "slate-blue": "hsl(252, 100%, 67%)",
        "light-red": {
          default: "hsl(0, 100%, 67%)",
          light: "hsl(0, 100%, 67%,.2)",
        },
        "orangey-yellow": {
          default: "hsl(39, 100%, 56%)",
          light: "hsl(39, 100%, 56%,.2)",
        },
        "green-teal": {
          default: "hsl(166, 100%, 37%)",
          light: "hsl(166, 100%, 37%,.2)",
        },
        "cobalt-blue": {
          default: "hsl(234, 85%, 45%)",
          light: "hsl(234, 85%, 45%,.2)",
        },
        white: "hsl(0, 0%, 100%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
