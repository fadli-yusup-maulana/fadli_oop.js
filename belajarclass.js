class Siswapplg{
    
    constructor(nama,kelas){
        this.nama = nama;
        this.kelas = kelas;
    }
    perkenalan(){
        console.log(`nama :  ${this.nama}`);
        console.log(`kelas :  ${this.kelas}`);
    }
    seragam(){
        console.log("mengunakan seragam jurusan ");
    }
}
const siswa3 = new Siswapplg("fadli yusup maulana")
siswa3.perkenalan();
const siswa1 = new Siswapplg();
siswa1.perkenalan();
const siswa2 = new Siswapplg();
siswa2.seragam();

class produk{
    constructor(nama,harga,jumlah){
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }
    
    tampilkanInfo(){
        console.log("nama produk: " + this.nama);
        console.log("harga : Rp." + this.harga);
        console.log("jumlah : " + this.jumlah);
    }
    hitungdiskon(persen){
        return this.harga-(this.harga * persen/100);
    }
}

const produk1 = new produk ("keyboard", 150000 ,2);
produk1.tampilkanInfo();
console.log("harga peroduk1 setelah diskon : " + produk1.hitungdiskon(15));