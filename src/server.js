const { createApp } = require('./createApp');
const PORT = process.env.PORT || 3000;
let app;

(async () => {
  app = await createApp();
  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
  });
})();

module.exports = app;