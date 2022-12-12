const getNDTV = require("../controllers/NDTV");

const updateNDTV = () =>  {
  getNDTV(NDTVURL, "cities");
  getNDTV(NDTVURL, "india");
  getNDTV(NDTVURL, "latest");
  getNDTV(NDTVURL, "offbeat");
  getNDTV(NDTVURL, "science");
  getNDTV(NDTVURL, "south");
  getNDTV(NDTVURL, "world-news");
}

// getIndiaToday(IndiaTodayURL, "india");
// getIndiaToday(IndiaTodayURL, "world");
// getIndiaToday(IndiaTodayURL, "business");
// getIndiaToday(IndiaTodayURL, "science");
// getIndiaToday(IndiaTodayURL, "health");
// getIndiaToday(IndiaTodayURL, "trending");
// getIndiaToday(IndiaTodayURL, "cryptocurrency");
// getIndiaToday(IndiaTodayURL, "cities");
// getIndiaToday(IndiaTodayURL, "crime");
// getIndiaToday(IndiaTodayURL, "binge-watch");
// getIndiaToday(IndiaTodayURL, "horoscopes");
// getIndiaToday(IndiaTodayURL, "fact-check");
// getIndiaToday(IndiaTodayURL, "data-intelligence-unit");

module.exports = updateNDTV;
