// const siswa = {
//     nama : "Kenzie titut Simonjutak",
//     kelas : "XI RPL 1",
//     umur : 39
// };

// console.log(siswa.nama);
// console.log(siswa.kelas);
// console.log(siswa.umur);



const siswa = {
    nama : "fadli ganteng",
    kelas : "XI RPL 1",

    perkenalan: function() {
        console.log("Halo namna saya " + this.nama);
        console.log("Saya dari kelas " + this.kelas);
    }
};

siswa.perkenalan();



const buku = {
    judul : "Pemrograman JavaScript",
    penulis : "Kenzie titut Simonjutak",
    tahun_terbit : 2023,

    dibaca : function() {
         console.log("Buku ini dipelajari di mapel kejuruan " + this.judul);
    }
};

const mobil = {
    merek : "Mazda Miata",
    warna : "ruby red",
    kecepatan : 0,

    jalan: function(){
        this.kecepatan += 100;
        console.log("mobil berjalan di kecepatan" + this.kecepatan);
    }
}
mobil.jalan();

console.log(buku.judul);
buku.dibaca();
