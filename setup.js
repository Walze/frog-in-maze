
const Cell = require('./Cell')

let inputString = `3 6 1
###*OO
O#OA%O
###*OO
2 3 2 1
`;

inputString = inputString.replace(/\s*$/, '')
  .split('\n')
  .map(str => str.replace(/\s*$/, ''));


function readGridTextLine(line) {
  return inputString[line];
}

module.exports = function setup() {
  const nmk = readGridTextLine(0).split(' ');
  const n = parseInt(nmk[0], 10);
  const m = parseInt(nmk[1], 10);
  const k = parseInt(nmk[2], 10);

  // n = cols, m = rows
  const grid = [...Array(n)].map(() => [...Array(m)]);

  for (let col = 0; col < n; col++) {
    for (let row = 0; row < m; row++) {
      grid[col][row] = new Cell(readGridTextLine(col + 1)[row])
    }
  }

  const tunnels = []
  for (let kItr = 0; kItr < k; kItr++) {
    const i1J1I2J2 = readGridTextLine(n + 1).split(' ');

    const i1 = parseInt(i1J1I2J2[0], 10);
    const j1 = parseInt(i1J1I2J2[1], 10);
    const i2 = parseInt(i1J1I2J2[2], 10);
    const j2 = parseInt(i1J1I2J2[3], 10);

    tunnels.push([
      { col: j1 - 1, row: i1 - 1 },
      { col: j2 - 1, row: i2 - 1 }
    ])
  }

  tunnels.map(tnl => {
    const cell1 = grid[tnl[0].col][tnl[0].row]
    const cell2 = grid[tnl[1].col][tnl[1].row]

    cell1.tunnel = tnl[1]
    cell2.tunnel = tnl[0]
  })

  return { grid, tunnels }
}