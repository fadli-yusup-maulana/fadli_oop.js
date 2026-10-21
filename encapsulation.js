// class Rekening {
//     #saldo = 0;

//     sektor(jumlah) {
//         if (jumlah > 0) {
//             this.#saldo += jumlah;
//         }
//     }
//     lihatSaldo() {
//         return this.#saldo;
//     }
// }

// const rekening = new Rekening();
// rekening.sektor(100000);
// console.log(rekening.lihatSaldo());

class Rekening {
    #saldo = 0;

    sektor(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
        }else{
            console.log("Jumlah setor harus lebih dari 0");
        }
    }

    tarik(jumlah) {
        if (jumlah > 0 && jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            console.log(`Berhasil menarik ${jumlah}. Saldo sekarang: ${this.#saldo}`);
        } else {
            console.log("Jumlah tarik harus lebih dari 0 dan tidak melebihi saldo");
        }
    }

    lihatSaldo() {
        return this.#saldo;
    }
}

const rekening = new Rekening(100000);
rekeningfadli.lihatSaldo();
rekening.sektor(100000);
rekening.tarik
console.log(rekening.lihatSaldo());