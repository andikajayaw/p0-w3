function pasanganTerbesar(num) {
    // you can only write your code here!
    var pasanganTerbesar = []
    var angkaPasangan = []
        // tampungan = ''
    for (var i = 0; i < String(num).length - 1; i++) {
        console.log(String(num)[i], String(num)[i + 1])
        angkaPasangan.push(String(num)[i] + String(num)[i + 1])

        if (String(num)[i] + String(num)[i + 1] > pasanganTerbesar) {
            pasanganTerbesar = String(num)[i] + String(num)[i + 1]
        }
    }
    console.log(angkaPasangan)
    return pasanganTerbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99