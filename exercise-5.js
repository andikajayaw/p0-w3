function palindrome(kata) {
    // you can only write your code here!
    for (i = 0; i < kata.length; i++) {
        for (j = kata.length - 1; j >= 0; j--) {
            return kata[i] === kata[j]
        }
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false