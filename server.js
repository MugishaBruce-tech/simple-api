const app = require("./app");
const PORT = 3000;

// Only start listening when this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
