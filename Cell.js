
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
  constructor(char) {
    this.walkable = true
    this.mine = false
    this.exit = false
    this.tunnel = false

    this._setProps(char)
  }

  _setProps(char) {
    this.char = char

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

