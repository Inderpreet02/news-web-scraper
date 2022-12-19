const getIndiaToday = require("./controllers/IndiaToday");
const cors = require("cors");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
// const { app } = require("firebase-admin");
const express = require("express");
const updateNDTV = require("./services/getNDTV").default;
const getNDTV = require("./controllers/NDTV");
const { db } = require("./firebase");
const app = express();

const NDTVURL = "https://www.ndtv.com/";
const IndiaTodayURL = "https://www.indiatoday.in/";

let categories = [
  "cities",
  "india",
  "latest",
  "offbeat",
  "people",
  "science",
  "south",
  "world-news",
];

// getNDTV(NDTVURL, "cities");

app.use(cors());
app.use(express.json());

function mailService(email) {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "inder192002@gmail.com",
      // use generated app password for gmail
      pass: "vpumilusogbtgopf",
    },
  });

  // setting credentials
  let mailDetails = {
    from: "inder192002@gmail.com",
    to: email,
    subject: "HAHA.",
    text: "no but yes",
  };

  // sending email
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("error occurred", err.message);
    } else {
      console.log("---------------------");
      console.log("email sent successfully");
    }
  });
}

app.get("/mail/:id", (req, res) => {
  const _id = req.params.id;

  mailService(_id);

  res.sendStatus(200);
});

var version = 1;
async function updateVersion() {
  var verRef = db.collection("version").doc("ver");

  await verRef.set({ version });

  version += 1;
}

app.get("/updatedNEWS", (req, res) => {
  updateVersion();
  getNDTV(NDTVURL, "cities");
  getNDTV(NDTVURL, "india");
  getNDTV(NDTVURL, "latest");
  getNDTV(NDTVURL, "offbeat");
  getNDTV(NDTVURL, "science");
  getNDTV(NDTVURL, "south");
  getNDTV(NDTVURL, "world-news");
});

// cron.schedule("*/5 * * * * *", function () {
//   updateVersion();
//   getNDTV(NDTVURL, "cities");
//   getNDTV(NDTVURL, "india");
//   getNDTV(NDTVURL, "latest");
//   getNDTV(NDTVURL, "offbeat");
//   getNDTV(NDTVURL, "science");
//   getNDTV(NDTVURL, "south");
//   getNDTV(NDTVURL, "world-news");
//   console.log("----------------");
//   console.log("running a task 20 minutes");
// });

app.listen(8080, () => {
  console.log("application listening.....");
});
