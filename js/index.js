
import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import { Sound } from "./sound.js"

//Timer variables
const time = document.querySelector(".time")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonIncrease = document.querySelector(".increase")
const buttonDecrease = document.querySelector(".decrease")
const buttonDarkMode = document.querySelector(".darkMode")
const buttonLightMode = document.querySelector(".lightMode")

//Sound variables
const buttonSoundForest = document.querySelector(".forestButton")
const buttonSoundRain = document.querySelector(".rainButton")
const buttonSoundCoffeeShop = document.querySelector(".coffeeShopButton")
const buttonSoundFirePlace = document.querySelector(".firePlaceButton")
  

//Buttons Images Variables
const pathForest = document.querySelector("path.forestButton")
const pathRain = document.querySelector("path.rainButton")
const pathCoffeeShop = document.querySelector("path.coffeeShopButton")
const pathFire = document.querySelector("path.firePlaceButton")
const pathPlay = document.querySelector("path.play")
const pathStop = document.querySelector("path.stop")
const pathIncrease = document.querySelector("path.increase")
const pathDecrease = document.querySelector("path.decrease")
  

//Ambience Sound variables
const forestSound = new Audio("./sound/Floresta.wav")
const rainSound = new Audio("./sound/Chuva.wav")
const coffeeShopSound = new Audio("./sound/Cafeteria.wav")
const firePlaceSound = new Audio("./sound/Lareira.wav")
const kitchenTimerSound = new Audio("./sound/kitchenTimer.mp3")
  

// variáveis declarativas
let minutes = Number(minutesDisplay.textContent)
let button
let ambienceSound
let imagePath
let seconds
let soundType
let timerTimeOut


function darkMode() {
  // pathPlay.classList.add("darkMode")
  // pathStop.classList.add("darkMode")
  // pathIncrease.classList.add("darkMode")
    // pathDecrease.classList.add("darkMode")
    // pathCoffeeShop.classList.add("darkMode")
    // pathFire.classList.add("darkMode")
    // pathForest.classList.add("darkMode")
    // pathRain.classList.add("darkMode")
    buttonDarkMode.classList.remove("hide")
    buttonLightMode.classList.add("hide")
  }
  
function lightMode(){
    // pathPlay.classList.remove("darkMode")
    // pathStop.classList.remove("darkMode")
    // pathIncrease.classList.remove("darkMode")
    // pathDecrease.classList.remove("darkMode")
    // pathCoffeeShop.classList.remove("darkMode")
    // pathFire.classList.remove("darkMode")
    // pathForest.classList.remove("darkMode")
    // pathRain.classList.remove("darkMode")
    buttonDarkMode.classList.add("hide")
    buttonLightMode.classList.remove("hide")
  }
  
  
  buttonLightMode.addEventListener("click", function () {
    if (buttonDarkMode.classList.contains("hide")) {
      lightMode()
    } else {
      darkMode()
    }
  })

export const timer = Timer({
  time,
  pathPlay,
  minutesDisplay,
  secondsDisplay,
  kitchenTimerSound,
  timerTimeOut,
  minutes,
  seconds,
  
})

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  pathPlay,
  pathStop,
  pathIncrease,
  pathDecrease,
  timerTimeOut,
  timer,
  minutes,
  minutesDisplay,
})        

const sound = Sound({
  buttonSoundForest,
  pathForest,
  forestSound,
  buttonSoundRain,
  pathRain,
  rainSound,
  buttonSoundCoffeeShop,
  pathCoffeeShop,
  coffeeShopSound,
  buttonSoundFirePlace,
  pathFire,
  firePlaceSound,
  ambienceSound,
  button,
  imagePath,
  soundType,
})

