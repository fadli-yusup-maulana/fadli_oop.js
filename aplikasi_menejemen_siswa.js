class Siswa {
    //Constuctor untuk menyimpan data awal siswa
    constructor(nama, kelas, nilai1, nilai2){
        this.nama = nama;
        this.kelas = kelas;
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
    }
    //method untuk menampilkna identitas siswa

    tampilkanData() {
        console.log("=== DATA SISWA ===");
        console.log("Nama: " + this.nama);
        console.log("Kelas: " + this.kelas);
    }
    //method untuk menghitung nilai rata rata
    hitungRataRata() {
        return(this.nilai1 + this.nilai2) / 2 ;
    }
    //method untuk menentukan status kelulusan
    cekKelulusan() {
        if (this.hitungRataRata() >= 75) {
            return "Lulus";
        }else {
            return "Belum Lulus";
        }
    }
}

//membuat objek siswa
const siswa1 = new Siswa("andi", "xi pplg 1", 80, 90);
const siswa2 = new Siswa("siti", "xi pplg 2", 70, 60);

//memnampilkan data siswa pertama
siswa1.tampilkanData();
console.log("Rata-rata: " + siswa1.hitungRataRata());
console.log("Status: " + siswa1.cekKelulusan());

//menampilkan daata siswa kedua
siswa2.tampilkanData();
console.log("Rata-rata: " + siswa2.hitungRataRata());
console.log("Status: " + siswa2.cekKelulusan());
