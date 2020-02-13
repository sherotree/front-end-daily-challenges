const COUNT = 50
let dom = {
  hexagons: document.querySelector('.hexagons'),
}

Array(COUNT)
  .fill('')
  .forEach((x, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--scale', Math.pow(0.9, 1))
    span.style.setProperty('--n', i + 1)
    dom.hexagons.hexagons.appendChild(span)
  })
