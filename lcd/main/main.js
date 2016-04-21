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

function loadAllDigitsGrids() {
    return [
        {value:0,pattern:{firstLine:'._.',secondLine:'|.|',thirdLine:'|_|'}},
        {value:1,pattern:{firstLine:'...',secondLine:'..|',thirdLine:'..|'}},
        {value:2,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'|_.'}},
        {value:3,pattern:{firstLine:'._.',secondLine:'._|',thirdLine:'._|'}},
        {value:4,pattern:{firstLine:'...',secondLine:'|_|',thirdLine:'..|'}},
        {value:5,pattern:{firstLine:'._.',secondLine:'|_.',thirdLine:'._|'}},
        {value:6,pattern:{firstLine:'._.',secondLine:'|_.',thirdLine:'|_|'}},
        {value:7,pattern:{firstLine:'._.',secondLine:'..|',thirdLine:'..|'}},
        {value:8,pattern:{firstLine:'._.',secondLine:'|_|',thirdLine:'|_|'}},
        {value:9,pattern:{firstLine:'._.',secondLine:'|_|',thirdLine:'..|'}}
    ];
}
