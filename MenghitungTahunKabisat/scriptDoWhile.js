// Do while

var tahun = 1600;

do {
    if (tahun % 4 == 0 && tahun % 100 !== 0) {
        console.log(tahun + " adalah tahun kabisat.");
    } else if (tahun % 400 == 0) {
        console.log(tahun + " adalah tahun kabisat.");
    } else if (tahun % 100 == 0) {
        console.log(tahun + " Bukan tahun kabisat.");
    } else {
        console.log(tahun + " Bukan tahun kabisat.");
    }
    tahun+=4
} while (tahun <= 2404)