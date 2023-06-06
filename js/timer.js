
export function Timer({
  time,
  pathPlay,
  timerTimeOut,
  resetControls,
  minutesDisplay,
  secondsDisplay,
  kitchenTimerSound,
  minutes,
  seconds,
  controls,
  playPauseButton,
}) {
  
  //função set time
  time.addEventListener("click", function () {
    if (pathPlay.classList != "pressedButton") {
      setMinutes()
    }
  })
  
  //Set minutes function
  function setMinutes() {
    let newMinutes = Number(prompt("Quantos minutos?"))
    if (!newMinutes) {
      clearTimeout(timerTimeOut)
      resetControls()
      resetTimer()
    } else {
      minutes = newMinutes
      updateTimerDisplay(minutes, 0)
      controls.playPauseButton("play")
    }
  }
  
  // Update timer display function
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function resetTimer(minutes) {
    updateTimerDisplay(minutes, 0)
  }
  
  //Countdown Function
  function countDown() {
    timerTimeOut = setTimeout(function (minutes, seconds) {
      minutes = Number(minutesDisplay.textContent)
      seconds = Number(secondsDisplay.textContent)
  
      if (minutes <= 0 && seconds <= 1) {
        resetControls()
        secondsDisplay.textContent = "00"
        kitchenTimerSound.play()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      --seconds
      updateTimerDisplay(minutes, seconds)
      countDown()
    }, 1000)
  }

  function clearTime() {
    clearTimeout(timerTimeOut)
  }

return {
  countDown,
  resetTimer,
  updateTimerDisplay,
  setMinutes,
  clearTime,
  
}

}
