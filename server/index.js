const db = require("./db/db");
const PORT = process.env.PORT || 8080;
const app = require("./app");
const seed = require("../script/seed");

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Welcome to the MetaVerse at ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
