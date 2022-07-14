const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bill = require('./routes/bill')



dotenv.config();

const db = require('./db');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/bill', bill);

// app.get("/api", async (req, res) => {
//   try {
//     const data = await HomeBIllDetail.find({});
//     res.json("working");

//   } catch (e) {
//     console.log(e);
//     res.json("failed");
//   }
// });


app.listen(port, () => {
  console.log(`app listen on port ${port}`);
  db();
});
