const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../firebase");
const writeInDb = require("../services/dbWrite");

const getIndiaToday = async (URL, category) => {
  const news = [];
  for (let i = 0; i <= 10; i++) {
    try {
      const response = await axios.get(URL + category + `?page=${i}`);
      const $ = cheerio.load(response.data);
      let index = 0;

      $(".catagory-listing").each((j, item) => {
        const $item = $(item);
        const name = $item.find("h2 > a").text() || "";

        const content = $item.find("p").text() || "";
        const dateContent =
          $item.find(".posted-by").text().trim().split("|") || "";
        const imageURL = $item.find("img").attr("src") || "";
        const redirectURL = "https://www.indiatoday.in/" + $item.find("a").attr("href") || "";

        const author = dateContent[0].trim() || "IndiaToday";
        const d = new Date();
        const date = dateContent[1] || d.getFullYear()+"-"+(d.getMonth()+1)+"-"+ d;
        const pageNo = i;

        let headLine;

        if (name !== "" || content !== "") {
          headLine = {
            name,
            content,
            date,
            author,
            imageURL,
            redirectURL,
            pageNo,
          };

          news.push(headLine)
        }

        // news.push(headLine);
      });
    } catch (error) {
      console.log(`Error is \n ${error}`);
    }
    // console.log(news);
  }
  
  writeInDb({news}, "IndiaToday", category);
  // console.log("Done");
};

module.exports = getIndiaToday;
