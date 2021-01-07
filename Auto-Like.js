setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="like"]')) {
    d.click()
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 500000)


//500000 = 500000ms = 500 second
Approximately 20-30 Likes per 8.3min
