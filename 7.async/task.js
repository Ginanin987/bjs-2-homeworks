class AlarmClock {
  constructor(alarmCollection, id) {
    this.alarmCollection = []
    this.intervalId = null
  }

  addClock(time, callback, canCall = true) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы")
    }

    if (this.alarmCollection.time === time) {
      console.warn("Уже присутствует звонок на это же время")
    } else {
      this.alarmCollection.push({
        callback,
        time,
        canCall,
      })
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarmTime) => alarmTime.time !== time
    )
  }

  getCurrentFormattedTime() {
    let currentTime = new Date(2022, 3, 1, 3, 1)
    let hours =
      currentTime.getHours() < 10
        ? `0${currentTime.getHours()}`
        : currentTime.getHours()
    let minutes =
      currentTime.getMinutes() < 10
        ? `0${currentTime.getMinutes()}`
        : currentTime.getMinutes()
    return `${hours}:${minutes}`
  }

  start() {
    if (this.intervalId) {
      return
    } else {
      this.intervalId = setInterval(() => {
        console.log("start")
        this.alarmCollection.forEach((element) => {
          if (
            element.time === this.getCurrentFormattedTime() &&
            element.canCall === true
          ) {
            element.canCall = false
            element.callback()
          }
        })
      }, 1000)
    }
  }

  stop() {
    clearInterval()
    this.intervalId = null
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) => (element.canCall = true))
  }

  clearAlarms() {
    this.stop()
    this.alarmCollection = []
  }
}
