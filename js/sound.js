export function Sound({
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
}) {
  // Sound button listener
  buttonSoundForest.addEventListener("click", function () {
    soundType = "forest"
    soundButton(soundType)
    toggleAmbienceSound(button, imagePath, ambienceSound)
  })

  buttonSoundRain.addEventListener("click", function () {
    soundType = "rain"
    soundButton(soundType)
    toggleAmbienceSound(button, imagePath, ambienceSound)
  })

  buttonSoundCoffeeShop.addEventListener("click", function () {
    soundType = "coffeeShop"
    soundButton(soundType)
    toggleAmbienceSound(button, imagePath, ambienceSound)
  })

  buttonSoundFirePlace.addEventListener("click", function () {
    soundType = "firePlace"
    soundButton(soundType)
    toggleAmbienceSound(button, imagePath, ambienceSound)
  })

  //Audio Funcions
  function ambienceSoundPlay(ambienceSound) {
    ambienceSound.play()
    button.classList.add("soundOn")
    imagePath.classList.add("soundOn")
  }

  function ambienceSoundPause(ambienceSound) {
    ambienceSound.pause()
    button.classList.remove("soundOn")
    imagePath.classList.remove("soundOn")
  }

  function toggleAmbienceSound(button, imagePath, ambienceSound) {
    if (button.classList.contains("soundOn")) {
      ambienceSoundPause(ambienceSound)
    } else {
      ambienceSoundPlay(ambienceSound)
    }
  }

  function soundButton(soundType) {
    switch (soundType) {
      case "forest":
        button = buttonSoundForest
        imagePath = pathForest
        ambienceSound = forestSound
        break
      case "rain":
        button = buttonSoundRain
        imagePath = pathRain
        ambienceSound = rainSound
        break
      case "coffeeShop":
        button = buttonSoundCoffeeShop
        imagePath = pathCoffeeShop
        ambienceSound = coffeeShopSound
        break
      case "firePlace":
        button = buttonSoundFirePlace
        imagePath = pathFire
        ambienceSound = firePlaceSound
        break
    }
  }
  return {
    soundButton,
    toggleAmbienceSound,
    ambienceSoundPlay,
    ambienceSoundPause,
  }
}

