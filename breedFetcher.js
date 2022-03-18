const request = require('request');


// breed = process.argv.slice(2)



const fetchBreedDescription = function (breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(URL , (error, response, body) => {

    if (error) {
      return callback(error, null)
    }

    const data = JSON.parse(body)
    console.log(data);
    let breed = data[0]
    if (breed) {
      callback(null, breed.description)
    } else {
      callback('Breed not found')
    }

  })

};





module.exports = { fetchBreedDescription }

// breedFetcher(breed);



/*The Chartreux is generally silent but communicative.
Short play sessions, mixed with naps and meals are their perfect day.
Whilst appreciating any attention you give them, they are not demanding,
content instead to follow you around devotedly, sleep on your bed and
snuggle with you if you’re not feeling well.
*/


  // console.log(body);
  // if (body.length === 0){
  //   console.log('Breed not found', \);
  //   return
  // }