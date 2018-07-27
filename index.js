'use strict';

/*
3 6 1
###*OO
O#OA%O
###*OO
2 3 2 1
*/


const setup = require('./setup')
const { grid, tunnels } = setup()

console.log(grid)

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', inputStdin => {

    // Exit command
    if (inputStdin.trim() === '') return process.emit('SIGINT');
});

process.on('SIGINT', function () {
    process.stdout.write('\nENDED\n');
    process.exit();
});

