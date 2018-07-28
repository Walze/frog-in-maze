
/**
 *
 *
 * @class Cell
 */
module.exports = class Cell {
  /**
   *Creates an instance of Cell.
   * @param {string} char
   * @memberof Cell
   */
  constructor(grid, char, pos) {
    this.char = char
    this.pos = pos
    this.walkable = true
    this.mine = false
    this.exit = false
    this.tunnel = false
    this.grid = grid

    this._neighbors = false

    this._setProps(char)
  }

  neighborhood() {
    if (this._neighbors) return this._neighbors

    this._neighbors = {}

    const row = this.pos.row
    const col = this.pos.col

    this._neighbors.up = this.grid.cell({ row: row - 1, col })
    this._neighbors.down = this.grid.cell({ row: row + 1, col })
    this._neighbors.left = this.grid.cell({ row, col: col - 1 })
    this._neighbors.right = this.grid.cell({ row, col: col + 1 })

    return this._neighbors
  }

  _setProps(char) {
    switch (char) {
      // wall
      case '#':
        this.walkable = false
        break

      // frog
      case 'A':
        break

      // A MINE
      case '*':
        this.mine = true
        break

      // exit
      case '%':
        this.exit = true
        break

      // free
      case 'O':
        break
    }
  }
}

