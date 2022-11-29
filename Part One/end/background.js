chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(['timer'], (res) => {
    const time = res.timer ?? 0
    chrome.storage.local.set({
      timer: time + 1,
    })

    // console.log(time)

    // if(time % 5 == 0) {
    //     this.registration.showNotification('My first Extension', {
    //         body: '1 second has passed',
    //         icon: 'icon.png',
    //       })
    }
  })
})
