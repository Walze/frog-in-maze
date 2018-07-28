
const event = require('./event')

module.exports = class Frog {
  constructor({ col, row }, grid) {
    this.cell = { col, row }
    this.beforeMove = { col, row }
    this.grid = grid
  }

  get move() {
    return {
      up: this._moveUpdate(this.up.bind(this)),
      down: this._moveUpdate(this.down.bind(this)),
      left: this._moveUpdate(this.left.bind(this)),
      right: this._moveUpdate(this.right.bind(this))
    }
  }

  _moveUpdate(fn) {
    return () => {
      fn()

      return this._update()
    }
  }

  _update() {
    const movedCell = this.grid.cell(this.beforeMove)
    let eventString = 'MOVED'

    if (movedCell.mine) {
      eventString = 'DIED'
      this.cell = this.beforeMove
    }

    if (movedCell.tunnel) {
      eventString = 'TUNNELED'

      this.beforeMove = movedCell.tunnel
      this.cell = this.beforeMove
    }

    if (movedCell.exit) {
      eventString = 'EXIT'
      this.cell = this.beforeMove
    }

    if (!movedCell.walkable) {
      eventString = 'WALL'
    }


    event.emit(eventString)
    return eventString
  }

  up() {
    this.beforeMove.row--
  }

  down() {
    this.beforeMove.row++
  }

  left() {
    this.beforeMove.col--
  }

  right() {
    this.beforeMove.col++
  }
}