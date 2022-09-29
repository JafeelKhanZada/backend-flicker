const Gallery = require("./gallery");
module.exports = (app) => {
  app.use("/api/gallery", Gallery);
  return app;
};
