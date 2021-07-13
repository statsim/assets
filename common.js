console.log('asdas')

const apps = [
  ['StatSim', 'https://statsim.com/app'],
  ['Analyze', 'https://statsim.com/analyze'],
  ['Fit', 'https://statsim.com/fit'],
  ['Forecast', 'https://statsim.com/forecast'],
  ['Gen', 'https://statsim.com/gen'],
  ['Profile', 'https://statsim.com/profile'],
  ['Preview', 'https://statsim.com/preview'],
  ['Select', 'https://statsim.com/select'],
  ['Solve', 'https://statsim.com/solve'],
  ['Vis', 'https://statsim.com/vis']
]

const lis = apps.map(v => `<li><a href="${v[1]}">${v[0]}</a></li>`).join('\n')

const menuEl = document.getElementById('menu')

if (menuEl) {
  menuEl.innerHTML = `
  <a class='dropdown-trigger btn-flat' href='#' data-target='dropdown1'>☰</a>
  <ul id='dropdown1' class='dropdown-content'>${lis}</ul>
  `
  var existCondition = setInterval(function () {
    if (document.getElementById('dropdown1')) {
      clearInterval(existCondition)
      var elems = document.querySelectorAll('.dropdown-trigger')
      M.Dropdown.init(elems, {})
    }
  }, 100)
}
