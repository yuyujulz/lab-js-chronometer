class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()},1000)
    }
  
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
     return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
    
  }

  split() {
    
  }
}
