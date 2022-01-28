// Add the unit tests of the sum function here
import {sum} from "../src/sum";

test('adds 1 + 2 to equal 3', () => {

const one = 1;
const two = 2;
expect(one).toEqual(1);
expect(two).toEqual(2);
for(let a =1; a < 2; a++) {
  for (let b = 1; b < 10; b++) {
    expect(a + b).not.toBe(0);
    expect(sum(1, 2)).toBe(3);
    expect(sum('a', 'b')).not.toBe(3);
  }
}

});
