import {numberInWords, wordInNumber} from "../src/numberInWords";
import wordsToNumbers from "words-to-numbers";

test('convert Number in word test', () => {

    expect(numberInWords(749)).toBe("seven hundred forty-nine");


})

test('convert Number in word test', () => {

    expect(wordsToNumbers("seven hundred forty-nine")).toBe(749);


})