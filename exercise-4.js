function dataHandling2(input) {
    /* Nomor 1 */
    removed = input.splice(1, 1, 'Roman Alamsyah Elsharawy')
    removed = input.splice(2, 1, 'Provinsi Bandar Lampung')
    removed = input.splice(4, 1, 'Pria', 'SMA Internasional Metro')

    console.log(input)

    /* Nomor 2 */
    tahun = input[3]
    tanggal = tahun.split('/')


    bulan = tanggal[1]
    console.log(bulan)
    switch (bulan) {
        case '01':
            console.log('Januari')
            break
        case '02':
            console.log('Februari')
            break
        case '03':
            console.log('Maret')
            break
        case '04':
            console.log('April')
            break
        case '05':
            console.log('Mei')
            break
        case '06':
            console.log('Juni')
            break
        case '07':
            console.log('Juli')
            break
        case '08':
            console.log('Agustus')
            break
        case '09':
            console.log('September')
            break
        case '10':
            console.log('Oktober')
            break
        case '11':
            console.log('November')
            break
        case '12':
            console.log('Desember')
            break
        default:
            'Invalid'
            break;
    }

    /* Nomor 3 */
    tanggalSort = tanggal.sort(function(a, b) { return b - a })
    console.log(tanggalSort)

    /* Nomor 4 */
    tanggalBaru = tahun.split('/')
    tanggalJoin = tanggalBaru.join('-')
    console.log(tanggalJoin)

    /* Nomor 5 */
    name = input[1]
    removedName = name.slice(0, 15)
    console.log(removedName)
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);