module.exports = {
  // ... other webpack configurations ...
  ignoreWarnings: [
    {
      module: /jspdf/,
      message: /Failed to parse source map/,
    },
  ],
}; 