
const Cell = require('./Cell')

class Grid {
  constructor(cols, rows) {
    this.grid = [...Array(cols)].map(() => [...Array(rows)])

    this.grid.cell = this.cell
    this.grid.cols = cols
    this.grid.rows = rows

    return this.grid
  }

  cell({ row, col }) {
    // this = this.grid

    if (row > this.rows || row < 0) return null

    if (col > this.cols || col < 0) return null


    return this[row][col]
  }
}

module.exports = function Setup(input) {
  const string = input.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''))

  const readGridTextLine = (line) => {
    return string[line]
  }





  const nmk = readGridTextLine(0).split(' ')
  const n = parseInt(nmk[0], 10)
  const m = parseInt(nmk[1], 10)
  const k = parseInt(nmk[2], 10)

  // = cols, m = rows
  const grid = new Grid(n, m)
  let frogPos

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      const char = readGridTextLine(row + 1)[col]

      grid[row][col] = new Cell(grid, char, { row, col })

      if (char === 'A')
        frogPos = { row, col }
    }
  }





  const tunnels = []

  for (let kItr = 0; kItr < k; kItr++) {
    const i1J1I2J2 = readGridTextLine(n + 1).split(' ')

    const i1 = parseInt(i1J1I2J2[0], 10)
    const j1 = parseInt(i1J1I2J2[1], 10)
    const i2 = parseInt(i1J1I2J2[2], 10)
    const j2 = parseInt(i1J1I2J2[3], 10)

    tunnels.push([
      { col: j1 - 1, row: i1 - 1 },
      { col: j2 - 1, row: i2 - 1 }
    ])
  }

  tunnels.map(tnl => {
    const cell1 = grid[tnl[0].row][tnl[0].col]
    const cell2 = grid[tnl[1].row][tnl[1].col]

    cell1.tunnel = tnl[1]
    cell2.tunnel = tnl[0]
  })







  return { grid, tunnels, frogPos }
}