//@ts-nocheck
const axios = require('axios');

const buildUrl = () => {
  const apiKey = 'e1e491e99464458eaf0035bca5b520d8';

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  return `http://newsapi.org/v2/everything?q=bitcoin&from=${today}&sortBy=publishedAt&apiKey=${apiKey}`;
};

exports.getNews = async (req, res, next) => {
  let requestUrl = buildUrl();

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
