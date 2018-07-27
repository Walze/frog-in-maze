'use strict'
/*
3 6 1
###*OO
O#OA%O
###*OO
2 3 2 1
*/

let inputString = `3 6 1
###*OO
O#OA%O
###*OO
2 3 2 1
`

class Frog {
  constructor({ col, row }, grid) {
    this.cell = { col, row }
    this.beforeMove = { col, row }
    this.grid = grid
  }

  get move() {
    return {
      up: this.up.bind(this),
      down: this.down.bind(this),
      left: this.left.bind(this),
      right: this.right.bind(this)
    }
  }

  _update() {
    const movedCell = this.grid.cell(this.beforeMove)

    if (movedCell.mine) {
      return console.log('DEAD')
    }

    if (movedCell.tunnel) {
      console.log('TUNNELED')
      this.cell = movedCell.tunnel
      this.beforeMove = this.cell

      return
    }

    if (movedCell.exit) {
      return console.log('WIN')
    }

    if (movedCell.walkable) {
      this.cell = this.beforeMove
      return
    }

  }

  up() {
    this.beforeMove.row--
    this._update()
  }

  down() {
    this.beforeMove.row++
    this._update()
  }

  left() {
    this.beforeMove.col--
    this._update()
  }

  right() {
    this.beforeMove.col++
    this._update()
  }
}

const setup = require('./setup')
const { grid, frog } = setup(inputString)

console.log(grid)
console.log()

const frog1 = new Frog(frog, grid)

console.log(frog1.cell)
frog1.move.right()
console.log(frog1.cell)

process.stdin.resume()
process.stdin.setEncoding('utf-8')

process.stdin.on('data', inputStdin => {

  // Exit command
  if (inputStdin.trim() === '') return process.emit('SIGINT')
})

process.on('SIGINT', function () {
  process.stdout.write('\nENDED\n')
  process.exit()
})

