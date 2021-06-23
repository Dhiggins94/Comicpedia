// 2820930967944502 is your apikey
// https://superheroapi.com/api/2820930967944502/287/biography   example of API in use (soley getting their biography)
// https://superheroapi.com/api/2820930967944502/287  = search character by ID (includes everything about character)
// https://superheroapi.com/api/2820930967944502/search/deadpool  = search by character name
// https://superheroapi.com/api/2820930967944502/644/image  = example of getting character by image
// info of the website
const domain_name = 'https://superheroapi.com/';
const apikey = '2820930967944502';
const urlName = 'https://superheroapi.com/api/2820930967944502'



let button1 = document.querySelector("hero")
let button2 = document.querySelector("Villain")
let container = document.querySelector()


















const superHeroInfo = async () => {
  try {
    const getApiUrl = ` https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502/search/batman`
    const response = await axios.get(getApiUrl)
    console.log(response)

  } catch (error) {
    console.error(error)
  }


}
superHeroInfo()