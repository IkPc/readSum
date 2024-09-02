var input = "-10\n4"
var lines = input.split('\n');


function readSum (y, z) {
    y = parseInt(lines[0], 10);
    z = parseInt(lines[1], 10);
    const result = y + z;

    console.log(`X = ${y} + ${z}`)
    console.log(`X = ${result}`);
}

readSum();