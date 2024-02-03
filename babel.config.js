module.exports = {
  presets: [
    // ... your existing presets
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    // ... your existing plugins
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
};
