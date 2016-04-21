function printLcdDigits(characters) {
    var digits = splitToDigits(characters);

    var grids = loadAllDigitsGrids();
    var lattices = buildLattices(digits,grids);

    var lcdDigit = buildLcdDigit(lattices);
    console.log(lcdDigit);
}

function splitToDigits(characters) {
    var digits = [];
    
    digits = characters.split('');
    
    return digits;
}

function getGridForDigit(digit,grids) {
    for(var i = 0;i < grids.length;i++){
        if(grids[i].value === parseInt(digit)){

            return grids[i];
        }
    }
}

function buildLattices(digits,grids) {
    var lattices = [];
    digits.forEach(function (digit) {
        var girdForDigit = getGridForDigit(digit,grids);
        lattices.push(girdForDigit);
    });

    return lattices;
}

function generateText(lattices) {
    var text = '';

    lattices.forEach(function (lattice) {
        text += lattice.pattern.firstLine + ' ';
    });
    text += '\n';
    lattices.forEach(function (lattice) {
        text += lattice.pattern.secondLine + ' ';
    });
    text += '\n';
    lattices.forEach(function (lattice) {
        text += lattice.pattern.thirdLine + ' ';
    });

    return text;
}

function buildLcdDigit(lattices) {
    var lcdDigit = '';

    lcdDigit = generateText(lattices);

    return lcdDigit;
}
