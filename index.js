'use strict'
/*
3 6 1
###*OO
O#OA%O
###*OO
2 3 2 1
*/

console.log('\n')

let inputString = `3 6 1
###*OO
O#OA%O
###*OO
2 3 2 1
`


const event = require('./event')

const Setup = require('./Setup')
const Frog = require('./Frog')
const { grid, frogPos } = Setup(inputString)


let wins = 0

const InitialFrog = new Frog(frogPos, grid)

for (const prop in InitialFrog.move) {
  const frog = new Frog(frogPos, grid)

  const move = frog.move[prop]

}


console.log(grid, grid[0][0])


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

