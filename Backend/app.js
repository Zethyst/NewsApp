const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const request = require("request");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get("/news", async (req, res) => {

  // const { country, category, query, page, pageSize } = req.body;
  // console.log(req.body);
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=183d2c5864504ce0bfa355cf205526bd&page=1&pageSize=9`;
  let response = await fetch(url);
  let data = await response.json();
  //   console.log(data);
  res.json({ data });

});

app.listen(port, () => {
  console.log(`Listening on port number: ${port}`);
});
