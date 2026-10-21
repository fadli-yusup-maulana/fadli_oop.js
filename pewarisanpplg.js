//buat class parent
class PPLG {
    constructor(nama ,umur){
        this.nama = nama;
        this.umur =umur;
    }
    perkenalan(){
        console.log("Halo, saya siswa xi pplg nama saya" + this.nama);
        console.log("umur saya tahun ini " + this.umur + "tahun")
    }
}
//buat class chlicd
class Siswa extends PPLG{
    constructor(nama, umur, kelas){
        super(nama, umur);
        this.kelas = kelas
    }
    belajar(){
        console.log(this.nama + "sedang belajar")  
    }
}

//buat objeck baru
const siswa1 = new Siswa("fadli" , 16, "xi pplg");
//memangil method yang di wariskan
siswa1.perkenalan();
//memangil method milik class siswa
siswa1.belajar();
//menampikan properti class
console.log("kelas :" + siswa1.kelas);