const express = require('express');

const HomeBIllDetail = require('../modal/homeBillDetail');


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await HomeBIllDetail.find({});
    res.json(data);

  } catch (e) {
    console.log(e);
    res.json("failed");
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const data = await HomeBIllDetail.create([
//       {
//         month: "Jan",
//         amount: 1500,
//         status: "paid"
//       },
//       {
//         month: "Feb",
//         amount: 2200,
//         status: "paid"
//       }
//     ]);
//     res.json( "saved");

//   } catch (e) {
//     console.log(e);
//     res.json("failed");
//   }
// })




module.exports = router;
