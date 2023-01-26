const { lte } = require("semver");

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function decode(expr) {
    console.log('RLY NIGGA');
    let res = '';
    expr.split('**********').forEach(element => {
        console.log(element.length);
        for (var j = 0; j + 10 <= element.length; j += 10) {
            var elemPart = element.slice(j, j + 10);
            elemPart = parseInt(elemPart, 10).toString();
            var morseLetter = '';
            for (var i = 0; i + 2 <= elemPart.length; i += 2) {
                var tmp = elemPart.slice(i, i + 2);
                if (tmp == '10') morseLetter += '.';
                if (tmp == '11') morseLetter += '-';
            }
            res += MORSE_TABLE[morseLetter];
        }
        res += ' ';
    });
    return res.trim();
}

module.exports = {
    decode
}