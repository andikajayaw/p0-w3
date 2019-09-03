function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    // var hitung = 0
    // kalimat = kalimat + ' '

    // for (var i = 0; i < kalimat.length; i++) {
    //     if (kalimat[i] === ' ') {
    //         hitung = hitung + 1
    //     }
    // }
    // return hitung

    pisah = kalimat.split(" ")
    console.log(pisah)
    return pisah.length

}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5