// tailwind.config.js
module.exports = {
  content: [
      './src/**/*.cljs',  // if your cljs files are in src
      './public/**/*.html', // the index.html file
  ],
  theme: {
    extend: {
      maxWidth: {
      'custom': '500px'
      },
    },
  },
  variants: {},
  plugins: [],
};
