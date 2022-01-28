const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ["", "", "twenty", "thirty", "forty",
    "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundred = "hundred";



export function numberInWords(numTo1000) {

    const result = [];

    if (numTo1000 >= 100) {
        result.push(ones[numTo1000 / 100 | 0], hundred);
    }
    const numTo100 = numTo1000 % 100;
    if (numTo100 === 0) {
    } else if (numTo100 < 20) {
        result.push(ones[numTo100]);
    } else if (numTo100 % 10 === 0) {
        result.push(tens[numTo100 / 10]);
    } else {
        result.push(tens[numTo100 / 10 | 0] + '-' + ones[numTo100 % 10]);
    }
    return result.join(' ');

}

import wordsToNumbers from 'words-to-numbers';


 wordsToNumbers('');

