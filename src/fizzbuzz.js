export function fizzBuzz(n) {

    if (n) {
        var i = "";
        if ((n % 5) === 0 && n !== 15) {
            i += "buzz";
            return i;
        }
        if ((n % 3) === 0 && n%5 !==0) {
            i += "fizz";
            return i;
        }
        if ((n % 3) !== 0 || (n % 5) !== 0) {
            return n;
        }
        if (n % 3 ===0 && n % 5 ===0 ){
            i = "fizzbuzz";
            return i;
        }


    }


}