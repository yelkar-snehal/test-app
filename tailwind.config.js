// Consumer app's tailwind.config.js
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@centricsoftware/toolkit-tenant/**/*.{js,jsx,ts,tsx}' // Add this
  ],
  // ... rest of config
});
