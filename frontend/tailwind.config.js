// Example `tailwind.config.js` file

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  purge: {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    options: {
      safelist: ["html", "body"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {},
  variants: {},
  plugins: [],
};
