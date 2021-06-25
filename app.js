const domain_name = 'https://superheroapi.com/';
const apikey = '2820930967944502';
const urlName = 'https://superheroapi.com/api/2820930967944502'


const heroButton = document.querySelector('.doog')
const villainButton = document.querySelector('.dab')


let container = document.querySelector(".info-placement")


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


heroButton.addEventListener("click", (e) => {
  superHeroInfo(e.target.value)

})

villainButton.addEventListener("click", (e) => {
  superHeroInfo(e.target.value)
})


function showSomething(info) {

  const name = document.createElement("p")
  name.textContent = info.name
  container.appendChild(name)

  const description = document.createElement("p")
  description.textContent = info.biography["first-appearance"]
  container.append(description)

  const issuing = document.createElement("p")
  issuing.textContent = info.biography["publisher"]
  container.append(issuing)

  // if (issuing.textContent = info.biography["publisher"] === "-"){
  //   issuing.textContent = info.biography["full-name"]
  //   return container.append(issuing)
  // }

  const group = document.createElement("p")
  group.textContent = info.connections["group-affiliation"]
  container.append(group)

  // if ( group.textContent = info.connections["group-affiliation"] === "-") {
  //   group.textContent = info.biography["alter-egos"]
  //   return container.append(group)   

  const photo = document.createElement('img')
  console.log(photo)
  photo.setAttribute("src", info.image["url"])
  container.appendChild(photo)

}




function removeContent(element) {

  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}




// heiroku server makes it take longer to load, distract with loading bar





