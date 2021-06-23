// 2820930967944502 is your apikey
// https://superheroapi.com/api/2820930967944502/287/biography   example of API in use (soley getting their biography)
// https://superheroapi.com/api/2820930967944502/287  = search character by ID (includes everything about character)
// https://superheroapi.com/api/2820930967944502/search/deadpool  = search by character name
// https://superheroapi.com/api/2820930967944502/644/image  = example of getting character by image
// info of the website
const domain_name = 'https://superheroapi.com/';
const apikey = '2820930967944502';
const urlName = 'https://superheroapi.com/api/2820930967944502'
// function for button
function buttonLog() {
  console.log(button.value)
  superHeroInfo(button)
}
const heroButton = document.querySelector('input')
const villainButton = document.querySelector('input')

// place where things will append to
let container = document.querySelector(".info-placement")

// getting the data from the api
const superHeroInfo = async () => {
  try {
    const getApiUrl =  await axios.get(`https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502&s=${button.value}`)
    // const getApiUrl = ` https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502/search/batman`
    const response = await axios.get(getApiUrl)
    const pressHero = getApiUrl.data.Search
    console.log(response)
    return pressHero
  } catch (error) {
    console.error(error)
  }

}
superHeroInfo()

// iterate over the data and append heroes to the dom
// function findHeros(hero) {
// for (let i = 0; i < hero.length; i++) {
 
  
// }
// }