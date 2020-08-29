/**
 * Resposive Enpal Charts
 *
 * @author Hugo Rezende <hugorezendedev@gmail.com>
 *
 * Created at     : 2020-08-28 16:28:36
 * Last modified  : 2020-08-28 17:00:36
 */

function startChart(element, data, options) {
  this.options = {
    charWidth: options.charWidth ? options.charWidth : 600,
    charHeight: options.charHeight ? options.charHeight : 300,
    divisionsLines: options.divisionsLines ? options.divisionsLines : 3,
    maxVal: options.maxVal ? options.maxVal : 100,
    minVal: options.minVal ? options.minVal : 0,
    positionLabel: options.positionLabel ? options.positionLabel : 'right',
  }
  var container = element

  // Create Line reference box
  let lineBox = document.createElement('div')
  lineBox.className = 'lines-reference-box '

  for (i = 0; i < options.divisionsLines; i++) {
    let line = document.createElement('div')
    line.className = 'line animated animated-fade'

    let description = document.createElement('div')
    description.className = 'description animated animated-fade'
    if (options.positionLabel === 'left') {
      description.classList.add('left')
    }
    description.textContent =
      (
        ((options.maxVal - options.minVal) / (options.divisionsLines - 1)) *
        (options.divisionsLines - 1 - i)
      ).toFixed(0) + '%'
    line.appendChild(description)

    lineBox.appendChild(line)
    container.appendChild(lineBox)
  }

  let boxBars = document.createElement('div')
  boxBars.className = 'box-bars'
  if (options.positionLabel === 'left') {
    boxBars.classList.add('left')
  }

  // Creating Bars
  data.forEach((dataElement) => {
    let bar = document.createElement('div')
    bar.className = 'bar'

    if (dataElement.color !== undefined) {
      bar.style.backgroundColor = dataElement.color
    }
    // Set Value for vertical graph
    bar.style.height =
      (dataElement.value / (options.maxVal - options.minVal)) *
        options.charHeight +
      'px'

    // Set Value for horizontal graph
    bar.style.width =
      (dataElement.value / (options.maxVal - options.minVal)) * 100 + '%'

    let floating = document.createElement('div')
    floating.className = 'box-floating'
    let span = document.createElement('span')
    span.textContent = '(' + dataElement.value + '%)'

    if (dataElement.logo !== undefined) {
      let logo = document.createElement('img')
      logo.setAttribute('src', dataElement.logo)
      floating.appendChild(logo)
    } else {
      floating.textContent = dataElement.title + ' '
    }
    floating.appendChild(span)
    bar.appendChild(floating)

    let valueMobile = document.createElement('div')
    valueMobile.classList.add('value-mobile')
    valueMobile.textContent = dataElement.value
    bar.appendChild(valueMobile)

    bar.style.margin = '0px ' + 100 / Object.keys(data).length + 'px'
    boxBars.appendChild(bar)
  })
  container.appendChild(boxBars)
}
