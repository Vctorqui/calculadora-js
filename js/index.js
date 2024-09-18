const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const clickedBtn = button.textContent

    if (button.id === 'c') {
      screen.textContent = '0'
      return
    }

    if (button.id === 'delete') {
      if (
        screen.textContent.length === 1 ||
        screen.textContent === '¡Error! :('
      ) {
        screen.textContent = '0'
      } else {
        screen.textContent = screen.textContent.slice(0, -1)
      }
      return
    }

    if (button.id === 'equal') {
      try {
        if (screen.textContent.includes('√')) {
          const expression = screen.textContent.replace('√', '')
          console.log((screen.textContent = Math.sqrt(expression)))
        } else {
          console.log((screen.textContent = eval(screen.textContent)))
        }
      } catch (err) {
        screen.textContent = '¡Error! :('
        console.log(err)
      }
      return
    }

    if (screen.textContent === '0' || screen.textContent === '¡Error! :(') {
      screen.textContent = clickedBtn
    } else {
      screen.textContent += clickedBtn
    }
  })
})
