const express = require('express');
const dotenv = require('dotenv');
const path = require('path');



dotenv.config();

const db = require('./db');

const HomeBIllDetail = require('./modal/homeBillDetail');


const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/api", async (req, res) => {
  try {
    const data = await HomeBIllDetail.find({});
    res.json("working");

  } catch (e) {
    console.log(e);
    res.json("failed");
  }
});

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
  db();
});
