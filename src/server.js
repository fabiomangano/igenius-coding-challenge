const { createApp } = require('./createApp');
const PORT = 3000;

(async () => {
  const app = await createApp();
  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
  });
})();

