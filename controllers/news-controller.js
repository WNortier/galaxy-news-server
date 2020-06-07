//@ts-nocheck
const axios = require('axios');
const apiKey = 'e1e491e99464458eaf0035bca5b520d8';
const requestUrl = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-27&sortBy=publishedAt&apiKey=${apiKey}`;

exports.getNews = async (req, res, next) => {
  let results = await axios
    .get(requestUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  res.status(201).json({
    message: 'Success',
    data: results,
  });
};
