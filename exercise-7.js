function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    // var hitungKata = 0
    // kalimat = kalimat + ' '

    // for (var i = 0; i < kalimat.length; i++) {
    //     if (kalimat[i] === ' ') {
    //         hitungKata = hitungKata + 1
    //     }
    // }
    // return hitungKata

    var result = []
    var temp = ''

    for (var i = 0; i <= kalimat.length; i++) {
        if (kalimat[i] === ' ' || i === kalimat.length) {
            result.push(temp)
            temp = ''
        } else {
            temp = temp + kalimat[i]
        }
    }
    return result.length

    // pisah = kalimat.split(" ")
    // console.log(pisah)
    // return pisah.length

}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5