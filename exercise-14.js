function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var angkaGenap = []
    var angkaGanjil = []
    var keliapatanTiga = []
    var semuaAngka = []
    var angka = []

    for (var i = 0; i < arr.length; i++) {
        angka = ''
        if (arr[i] % 3 === 0) {
            angka = angka + arr[i]
            keliapatanTiga.push(Number(angka))
        } else if (arr[i] % 2 === 0) {
            angka = angka + arr[i]
            angkaGenap.push(Number(angka))
        } else if (arr[i] % 2 !== 0) {
            angka = angka + arr[i]
            angkaGanjil.push(Number(angka))
        }
    }
    semuaAngka.push(angkaGenap, angkaGanjil, keliapatanTiga)
    return semuaAngka
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]