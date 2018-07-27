'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.on('SIGINT', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();

    process.stdout.write('\n end \n');
    process.exit();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const nmk = readLine().split(' ');

    const n = parseInt(nmk[0], 10);

    const m = parseInt(nmk[1], 10);

    const k = parseInt(nmk[2], 10);

    for (let nItr = 0; nItr < n; nItr++) {
        const row = readLine();

        // Write Your Code Here

        console.log(row, n, m, k)
    }
    for (let kItr = 0; kItr < k; kItr++) {
        const i1J1I2J2 = readLine().split(' ');

        const i1 = parseInt(i1J1I2J2[0], 10);

        const j1 = parseInt(i1J1I2J2[1], 10);

        const i2 = parseInt(i1J1I2J2[2], 10);

        const j2 = parseInt(i1J1I2J2[3], 10);

        // Write Your Code Here
        console.log(i1, j1, i2, j2)
    }
    // Write Your Code Here
}
