var dadJokes = async function() {
  const dadJokeLink = "https://icanhazdadjoke.com/slack";
  const axios = require('axios');
  let response;
  
  try {
    const url = `${dadJokeLink}`;
    response = await axios.get(url);
  }catch(err){
    return null;
  }

  console.log(response.data.attachments[0].fallback);

  return response;

};


dadJokes();