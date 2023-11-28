// const inputField = NULL

const wordChoice = async () => {
    try{
    const response = await fetch('https://api.api-ninjas.com/v1/randomword/', {
        method: "GET", 
        headers: {
            'X-Api-Key': '<API-KEY>'},
        contentType: 'application/json'
            });
            if(response.ok){
                const jsonResponse = await response.json()
                // console.log(jsonResponse)
                const word = jsonResponse.word.toLowerCase();
                console.log(word);          
            }
          }
          catch(error){
            console.log(error)
          }
        }

const hangWord = wordChoice()


// const request = require('request');

// request.get({
//   url: 'https://api.api-ninjas.com/v1/randomword',
//   headers: {
//     'X-Api-Key': '2pg9V7TvcUpST/ygRiH9kw==YcfrBWjyrbT1t4ay'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });
