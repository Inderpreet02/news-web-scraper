const axios = require("axios");
const cheerio = require("cheerio");
const writeInDb = require("../services/dbWrite");


const getNDTV = async (URL, category) => {
  
  const news = [];
  for (let i = 1; i <= 5; i++) {
    try {
      const response = await axios.get(URL + category + `/page-${i}`);
      const $ = cheerio.load(response.data);
      let index = 0;

      $(".news_Itm").each((j, item) => {
        const $item = $(item);
        const name = $item.find("h2").text() || "";

        const content = $item.find(".newsCont").text() || "";
        const dateContent =
          $item.find(".posted-by").text().trim().split("|") || "";
        const imageURL =
          $item.find(".news_Itm-img > a > img").attr("src") || "";
        const redirectURL = $item.find(".news_Itm-img > a").attr("href") || "";

        const author = dateContent[0].trim() || "";
        const date = dateContent[1] || "";
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

      });
    } catch (error) {
      console.log(`Error is \n ${error}`);
    }
  }
  
  writeInDb({news}, "NDTV", category)
  console.log("Done");
};


module.exports = getNDTV