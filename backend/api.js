const API_KEY = "Udi8eeHbRHs0cniaP2L9LhLRSqbiytj82mhghBao";
const api = {
  apiRequest() {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=" + API_KEY)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }
};

module.exports = api;

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });
