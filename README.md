# Project Overview

## Project Name

https://dhiggins94.github.io/Comicpedia/

## Project Description

This website will enable the user select between hero, or villian  and get a random person from either alignment as well as any information about said person such as their first issued apperance.

## API and Data Sample


i intend to use this superheroAPI. https://superheroapi.com/index.html. here is the json of a characters biography 
```
{
    "response": "success",
    "id": "66",
    "name": "Batgirl IV",
    "full-name": "Cassandra Cain",
    "alter-egos": "No alter egos found.",
    "aliases": [
        "Kasumi",
        "various mundane persona,"
    ],
    "place-of-birth": "League of Assassins (exact base is unknown)",
    "first-appearance": "Batman: Legends of the Dark Knight #120",
    "publisher": "DC Comics",
    "alignment": "good"
}
```
## Wireframes
Here is my wireframe. I built it first with a phone in mind.

![WireFrame for website](https://i.imgur.com/nRaLZOD.png " its wireframe of the website built for phone")




#### MVP 

- use postman to get data from the api as proof it works
- Build website using html, css, javascript
- make an about us show an alert to tell the user about the site
- style website with flexbox and use @media query 
- have  functional buttons render data from the api
- have each button that reperesents heroes and villians bring random characters from each alignment if possible
- show a image, and information about each character when one of the button is selected

#### PostMVP  

- use another api that allow me to bring videos of those characters that was seletced with them
- add another button for netural alignment

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Completed
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | completed 
|June 22-23| Pseudocode / actual code | complete
|June 24-25| Initial Clickable Model/MVP| complete
|June 25| Advanced css flexbox | complete
|June 28| Presentations | W.I.P

## Priority Matrix



![Priority Matrix](https://i.imgur.com/da1eJFp.png)





## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Getting the API rendering data | M | 1 hrs| 2 hrs | 4 hrs |
| writing Pseudocode | M| 1 hrs| 1 hrs | 1 hrs |
| Setting up the html and css | H | 3hrs| 3 hrs | 3 hrs |
| Get functionality on the about me | L | 2 hrs| .5 hrs | .5 hrs |
| Get functionality on the buttons | H | 3hrs| 3 hrs | 5 hrs |
| Get the API to iterate random heroes/villian by button | H| 3 hrs| 8 hrs | 8 hrs |
| Advance styling for css(flexbox) | H | 3 hrs| 2 hrs | 2 hrs |
| Using media queries for phones/desktops | H | 3 hrs| 2 hrs | 2hrs |
| Checking for errors in javascript | H | 3 hrs| 5 hrs | 5 hrs |
| Checking for errors in CSS styling | H | 3 hrs| 3 hrs | 3 hrs |
| Deploy the website, get it peered review | L | 2 hrs| 1 hrs | .5 hrs |
| Practice presnetation | L | 2 hrs| 2 hrs | 1 hrs |
| Total | N/A | 33hrs| 40hrs | 35hrs |


## Code Snippet

```
const min = 1
  const max = 731
  const randomId = Math.floor(Math.random() * (max - min) + min)   
  ```
  i like this code snippet alot because prior to this my inital plan was to use arrays and personally input good and bad id's and to look randomly through the array but since it wasnt utilizing the full character id of the site, i learned that using math.floor and random while giving the id values i can bring up all of them randomly which saved me alot of time.


## Change Log
issue i had: i received an CORS error while trying to access my api, solution to issue: filed out an issue ticket and it was solved by using an heroku server to gain access.

