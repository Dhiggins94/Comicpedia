// these arent tied to anything, serves as a reminder of what im using for my project
const domain_name = 'https://superheroapi.com/';
const apikey = '2820930967944502';
const urlName = 'https://superheroapi.com/api/2820930967944502'

// grabs the buttons from the html
const heroButton = document.querySelector('.doog')
const villainButton = document.querySelector('.dab')
const neutralButton = document.querySelector('.neut')
// created a container to later append things to the DOM
let container = document.querySelector(".info-placement")

// creates a function with an parameter of value, followed by all the everyones id's from 1 - 731 and searches randomly within itself and chooses 1, then a response variable was made to grab the api im using .followed by an if statement that checks the characters alignment for value(value being good or bad)  to return that data then recurses the superheroinfo function so it may start randomly selecting id's
const superHeroInfo = async (value) => {

  const min = 1
  const max = 731
  const randomId = Math.floor(Math.random() * (max - min) + min)   
  
  try {
    const getApiUrl = ` https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502/${randomId}`
    const response = await axios.get(getApiUrl)
      console.log("test")
    if (response.data.biography.alignment === value) {
      removeContent(container)
      showSomething(response.data)
      return response
    } else {
      superHeroInfo(value)
    }


  } catch (error) {
    console.error(error)
  }

 }

// each button here is going to bring a good or bad person when pressed thanks to calling the superheroinfo function with an parameter of value
heroButton.addEventListener("click", (e) => {
  superHeroInfo(e.target.value)

})

villainButton.addEventListener("click", (e) => {
  superHeroInfo(e.target.value)
})

neutralButton.addEventListener("click", (e) => {
  superHeroInfo(e.target.value)
})
// everything here is used for appending things to the DOM
function showSomething(info) {

  const name = document.createElement("p")
  name.textContent = info.name
  container.appendChild(name)

  const description = document.createElement("p")
  description.textContent = info.biography["first-appearance"]
  if (description.textContent === "-") {
    description.textContent = "INFORMATION NOT AVALIABLE"
    container.append(description)
  }
  else {
    container.append(description)
    }

  const issuing = document.createElement("p")
  issuing.textContent = info.biography["publisher"]
  if (issuing.textContent === "-") {
    group.textContent = " INFORMATION NOT AVALIABLE"
    container.append(issuing)
  }
  else {
    container.append(issuing)
    }

  const group = document.createElement("p")
  group.textContent = info.connections["group-affiliation"]
if (group.textContent === "-") {
  group.textContent = "INFORMATION NOT AVALIABLE"
  container.append(group)
}
else {
  container.append(group)
  }

  const photo = document.createElement('img')
  photo.setAttribute("src", info.image["url"])
  if (photo.setAttribute("src", info.image["url"]) === "-") {
    photo.setAttribute("src", info.image["url"]) = "INFORMATION NOT AVALIABLE"
    container.appendChild(photo)
  }
  else {
    container.appendChild(photo)
    }
}



// this allows the removal of the elements of the current info shown, to make room for the new info when pressed. This was made possible by omdb homework assignment
function removeContent(element) {

  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}









