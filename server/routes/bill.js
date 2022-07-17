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
});

router.get('/:id', async (req, res) => {
  try {
    const data = await HomeBIllDetail.findOne({ _id: req.params.id });
    // if (data === null){
    //   throw new Error();
    // } 
    res.json(data);

  } catch (e) {
    console.log(e);
    res.json({ err: "Something went wrong" });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await HomeBIllDetail.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Seccessfully deleted" });
  } catch (e) {
    res.json({ err: "Some thing went wrong" });
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const data = await HomeBIllDetail.create([
//       {
//         name: "User-1",
//         unit: "201",
//         address: "Street-1, Delhi",
//         customerId: "00000001",
//         month: "Jan 2021",
//         amount: "1005",
//         status: "Paid"
//       },
//       {
//         name: "User-2",
//         unit: "202",
//         address: "Street-2, Delhi",
//         customerId: "00000002",
//         month: "Feb 2021",
//         amount: "1010",
//         status: "Pending"
//       },
//       {
//         name: "User-3",
//         unit: "203",
//         address: "Street-3, Delhi",
//         customerId: "00000003",
//         month: "Mar 2021",
//         amount: "1015",
//         status: "Paid"
//       },
//       {
//         name: "User-4",
//         unit: "204",
//         address: "Street-4, Delhi",
//         customerId: "00000004",
//         month: "Apr 2021",
//         amount: "1020",
//         status: "Paid"
//       },
//       {
//         name: "User-5",
//         unit: "205",
//         address: "Street-5, Delhi",
//         customerId: "00000005",
//         month: "May 2021",
//         amount: "1025",
//         status: "Pending"
//       },
//       {
//         name: "User-6",
//         unit: "206",
//         address: "Street-6, Delhi",
//         customerId: "00000006",
//         month: "Jun 2021",
//         amount: "1030",
//         status: "Paid"
//       },
//       {
//         name: "User-7",
//         unit: "207",
//         address: "Street-7, Delhi",
//         customerId: "00000007",
//         month: "Jul 2021",
//         amount: "1035",
//         status: "Paid"
//       },
//       {
//         name: "User-8",
//         unit: "208",
//         address: "Street-8, Delhi",
//         customerId: "00000008",
//         month: "Aug 2021",
//         amount: "1040",
//         status: "Pending"
//       },
//       {
//         name: "User-9",
//         unit: "209",
//         address: "Street-9, Delhi",
//         customerId: "00000009",
//         month: "Sep 2021",
//         amount: "1045",
//         status: "Paid"
//       },
//       {
//         name: "User-10",
//         unit: "210",
//         address: "Street-10, Delhi",
//         customerId: "00000010",
//         month: "Oct 2021",
//         amount: "1050",
//         status: "Paid"
//       },
//       {
//         name: "User-11",
//         unit: "211",
//         address: "Street-11, Delhi",
//         customerId: "00000001",
//         month: "Nov 2021",
//         amount: "1055",
//         status: "Pending"
//       },
//       {
//         name: "User-12",
//         unit: "212",
//         address: "Street-12, Delhi",
//         customerId: "00000012",
//         month: "Dec 2021",
//         amount: "1060",
//         status: "Paid"
//       },

//     ]);
//     res.json("saved");

//   } catch (e) {
//     console.log(e);
//     res.json("failed");
//   }
// })




module.exports = router;
