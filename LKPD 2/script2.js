// Soal No 2

var jam = prompt('Masukkan Jumlah Jam');
var menit = prompt('Masukkan Jumlah Menit');
var detik = prompt('Masukkan Jumlah detik');

var totalDetik = jam * 3600 + menit * 60 + detik * 1;

console.log('Total detik ' + totalDetik + ' detik');