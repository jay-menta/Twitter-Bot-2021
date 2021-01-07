setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="retweet"]')) {
    d.click()
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 600000)

setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="retweetConfirm"]')) {
    d.click()
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 600000)

//600000 = 600000 ms = 600 second to scroll page
