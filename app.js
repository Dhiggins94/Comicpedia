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
const heroButton = document.querySelector('.doog')
const villainButton = document.querySelector('.dab')


// place where things will append to
let container = document.querySelector(".info-placement")

// getting the data from the api
const superHeroInfo = async (id) => {
  try {
    // const getApiUrl =  await axios.get(`https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502&s=${button.value}`)
    const getApiUrl = ` https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502/${id}`
    const response = await axios.get(getApiUrl)
    console.log(response)
    // const pressHero = getApiUrl.data.Search
    // return pressHero
  } catch (error) {
    console.error(error)
  }

}
superHeroInfo()

// iterate over the data and append heroes to the dom/button.

let heroId = [1,2,3,4,5,6,7,8,9,10]
let GoodId = heroId[Math.floor(Math.random() * heroId.length -1)]
console.log(heroId[Math.floor(Math.random() * heroId.length -1)]
)

let villainsId = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let badId = (villainsId[Math.floor(Math.random() * villainsId.length - 1)])

console.log(villainsId[Math.floor(Math.random() * villainsId.length - 1)])


// iterate over the data and append villains to the dom/button
heroButton.addEventListener("click",() => {
  superHeroInfo(GoodId)
})

villainButton.addEventListener("click", () => {
  superHeroInfo(badId)
})


// call them by biography? find way to call them by their alignment

