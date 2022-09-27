const schedule = require("node-schedule");
const getIndiaToday = require("./controllers/IndiaToday");
const getNDTV = require("./controllers/NDTV");

const NDTVURL = "https://www.ndtv.com/";
const IndiaTodayURL = "https://www.indiatoday.in/";


let categories = ["cities", "india", "latest", "offbeat", "people", "science", "south", "world-news"]

// getNDTV(NDTVURL, "cities");


const job = schedule.scheduleJob("* * 0 * *", function () {
    getNDTV(NDTVURL, "cities");
    getNDTV(NDTVURL, "india");
    getNDTV(NDTVURL, "latest");
    getNDTV(NDTVURL, "offbeat");
    getNDTV(NDTVURL, "science");
    getNDTV(NDTVURL, "south");
    getNDTV(NDTVURL, "world-news");
    
    getIndiaToday(IndiaTodayURL, "india");
    getIndiaToday(IndiaTodayURL, "world");
    getIndiaToday(IndiaTodayURL, "business");
    getIndiaToday(IndiaTodayURL, "science");
    getIndiaToday(IndiaTodayURL, "health");
    getIndiaToday(IndiaTodayURL, "trending");
    getIndiaToday(IndiaTodayURL, "cryptocurrency");
    getIndiaToday(IndiaTodayURL, "cities");
    getIndiaToday(IndiaTodayURL, "crime");
    getIndiaToday(IndiaTodayURL, "binge-watch");
    getIndiaToday(IndiaTodayURL, "horoscopes");
    getIndiaToday(IndiaTodayURL, "fact-check");
    getIndiaToday(IndiaTodayURL, "data-intelligence-unit");
});

