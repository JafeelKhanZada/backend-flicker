const express = require("express");
const middleware = require("./src/middleware");
const PORT = process.env.PORT || 4000;
let app = express();
const Router = require("./src/router");
app = middleware(app);
Router(app);
app.listen(PORT, () => {
  console.log(`APP IS WORKING ON PORT # ${PORT}`);
});
