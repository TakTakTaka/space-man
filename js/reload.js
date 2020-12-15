function reloadJs() {
  $.getScript("play.js")
    .done(() => {
      console.log('play.js reloaded')
    })
}