// 2820930967944502 is your apikey
// https://superheroapi.com/api/2820930967944502/287/biography   example of API in use (soley getting their biography)
// https://superheroapi.com/api/2820930967944502/287  = search character by ID (includes everything about character)
// https://superheroapi.com/api/2820930967944502/search/deadpool  = search by character name
// https://superheroapi.com/api/2820930967944502/644/image  = example of getting character by image
// info of the website
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
     
     if (response.data.biography.alignment === value) {
       removeContent(container)
      showSomething(response.data)
      return response
     } else {
       superHeroInfo()
     }
  
  
  } catch (error) {
    console.error(error)
  }

}






// iterate over the data and append villains to the dom/button
heroButton.addEventListener("click", (e) => {
  // removeContent(container)
  superHeroInfo(e.target.value)

})

villainButton.addEventListener("click", (e) => {
  // removeContent(container)
superHeroInfo(e.target.value)
})



function showSomething(info) {
  
  const name = document.createElement("p")
  name.textContent = info.biography["full-name"]
  container.appendChild(name)
  

  }


  function removeContent(element) {
  
    while (element.lastChild) {
      element.removeChild(element.lastChild)
    }
    }




// heiroku server makes it take longer to load, distract with loading bar






  
