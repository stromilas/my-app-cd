const express = require("express");
const app = express();
const cors = require('cors')
const port = 3005;

app.use(cors({origin: '*'}))

app.get("/", (req, res) => {
  const fruits = ["Carrot", "Apple", "Water Melon", "Orange", "Banana"];
  res.json({ fruits: fruits });
});

app.listen(port, () => {
  console.log(`Server running...`);
});
