export function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  pathPlay,
  pathStop,
  pathIncrease,
  pathDecrease,
  timer,
  minutes,
  minutesDisplay,
}) {

  //Reset controls function
  function resetControls() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    pathPlay.classList.remove("pressedButton")
    pathStop.classList.remove("pressedButton")
  }
  
  function playPauseButton(buttonType) {
    switch (buttonType) {
      case "play":
        buttonPause.classList.remove("hide")
        buttonPause.classList.add("pressedButton")
        pathPlay.classList.remove("pressedButton")
        buttonPlay.classList.add("hide")
        break
      case "pause":
        buttonPause.classList.add("hide")
        buttonPause.classList.remove("pressedButton")
        buttonPlay.classList.remove("hide")
        pathPlay.classList.add("pressedButton")
        break
    }
  }
  
  //função Play
  buttonPlay.addEventListener("click", function () {
    if (
      pathPlay.classList.contains("pressedButton") &&
      buttonPause.classList.contains("hide")
    ) {
      playPauseButton("play")
      timer.clearTime()
    } else {
      pathPlay.classList.add("pressedButton")
      timer.countDown()
    }
  })
  
  //Botão Pause
  buttonPause.addEventListener("click", function () {
    if (buttonPause.classList.contains("pressedButton")) {
      timer.countDown()
      playPauseButton("pause")
    } else {
      pathPause.classList.add("pressedButton")
      timer.clearTime()
    }
  })
  
  //Botão Increase
  buttonIncrease.addEventListener("click", function () {
    if (pathIncrease.classList.contains("pressedButton")) {
      pathIncrease.classList.remove("pressedButton")
    } else {
      pathIncrease.classList.add("pressedButton")
      setTimeout(function () {
        pathIncrease.classList.remove("pressedButton")
      }, 120)
      minutes = Number(minutesDisplay.textContent)
      minutes = minutes + 5
      timer.updateTimerDisplay(minutes, 0)
    }
  })
  
  //Botão Descrease
  buttonDecrease.addEventListener("click", function () {
    if (pathDecrease.classList.contains("pressedButton")) {
      pathDecrease.classList.remove("pressedButton")
    } else {
      pathDecrease.classList.add("pressedButton")
      setTimeout(function () {
        pathDecrease.classList.remove("pressedButton")
      }, 120)
      minutes = Number(minutesDisplay.textContent)
      minutes = minutes - 5
      timer.updateTimerDisplay(minutes, 0)
    }
  })
  
  //Botão Stop
  buttonStop.addEventListener("click", function () {
    if (pathStop.classList.contains("pressedButton")) {
      pathStop.classList.remove("pressedButton")
    } else {
      resetControls()
      setTimeout(function () {
        pathStop.classList.remove("pressedButton")
      }, 120)
      timer.clearTime()
      timer.resetTimer(minutes)
    }
  })
  
  return {
    resetControls,
    playPauseButton,
  }
  
}